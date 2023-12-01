// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import "@chainlink/contracts/src/v0.8/vrf/VRFV2WrapperConsumerBase.sol";

contract TrackingContract is VRFV2WrapperConsumerBase {

    enum ShipmentState { unassigned, assigned, picked, underway, delivered, canceled }

    struct Shipment {
        address sender;
        address recipient;
        address carrier;
        string trackingNumber;
        string point;
        ShipmentState state;
        string from;
        uint256 deliveryCode;
    }

    mapping(string => Shipment) public shipments;
    mapping(address => bool) public validCarriers;
    string[] public shipmentIds;

    event ShipmentCreated(string trackingNumber, address sender, address recipient);
    event CarrierAssigned(string trackingNumber, address carrier);
    event Delivered(string trackingNumber);

    //VRF
    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords, uint256 payment);

    struct RequestStatus {uint256 paid; bool fulfilled; uint256[] randomWords;}

    mapping(uint256 => string) public requestIdToTrackingNumber;
    mapping(uint256 => RequestStatus) public s_requests;

    address immutable linkAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
    address immutable wrapperAddress = 0x99aFAf084eBA697E584501b8Ed2c0B37Dd136693;

    constructor()VRFV2WrapperConsumerBase(linkAddress, wrapperAddress){}

    modifier onlyCarrier(string memory trackingNumber) {
        require(validCarriers[msg.sender], "You are not a valid carrier");
        require(shipments[trackingNumber].carrier == msg.sender, "You are not the carrier");
        _;
    }

    modifier onlyReceiver(string memory trackingNumber) {
        require(msg.sender == shipments[trackingNumber].recipient, "Only the receiver can access the delivery code.");
        _;
    }

    function isVerifiedCarrier() public view returns (bool) {
        return validCarriers[msg.sender];
    }

    function becomeValidCarrier() payable public {
        validCarriers[msg.sender] = true;
    }

    function createShipment(string memory trackingNumber, address recipient, string memory point, string memory from) external {
        require(shipments[trackingNumber].sender == address(0), "Existing shipment");
        address sender = msg.sender;
        uint256 requestId = requestRandomness(100000, 3, 1);
        s_requests[requestId] = RequestStatus({paid: VRF_V2_WRAPPER.calculateRequestPrice(100000), fulfilled: false, randomWords: new uint256[](0)});
        shipments[trackingNumber] = Shipment(sender, recipient, address(0), trackingNumber, point, ShipmentState.unassigned, from, requestId);
        shipmentIds.push(trackingNumber);
        emit ShipmentCreated(trackingNumber, sender, recipient);
        emit RequestSent(requestId, 1);
    }

    function fulfillRandomWords(uint256 _requestId, uint256[] memory _randomWords) internal override {
        require(s_requests[_requestId].paid > 0, "request not found");
        s_requests[_requestId].fulfilled = true;
        s_requests[_requestId].randomWords = _randomWords;
        string memory trackingNumber = requestIdToTrackingNumber[_requestId];
        shipments[trackingNumber].deliveryCode = (_randomWords[0]);
    }

    function assignCarrier(string memory trackingNumber) public {
        Shipment storage shipment = shipments[trackingNumber];
        require(shipment.carrier == address(0), "The ship have a carrier.");
        require(validCarriers[msg.sender], "You are not a valid carrier.");
        shipment.carrier = msg.sender;
        shipment.state = ShipmentState.assigned;
    }

    function markPicked(string memory trackingNumber) public onlyCarrier(trackingNumber){
        Shipment storage shipment = shipments[trackingNumber];
        shipment.state = ShipmentState.picked;
    }

    function transferOwnership(string memory trackingNumber, address newCarrier) public onlyCarrier(trackingNumber){
        Shipment storage shipment = shipments[trackingNumber];
        require(shipment.state != ShipmentState.delivered, "The ship is delivered.");
        shipment.carrier = newCarrier;
    }

    function markUnderway(string memory trackingNumber) public onlyCarrier(trackingNumber){
        Shipment storage shipment = shipments[trackingNumber];
        require(shipment.state == ShipmentState.picked, "The shipment isn't 'assigned'");
        shipment.state = ShipmentState.underway;
    }

    function markDelivered(string memory trackingNumber, uint256 deliveryCode) public onlyCarrier(trackingNumber) {
        Shipment storage shipment = shipments[trackingNumber];
        require(deliveryCode == shipment.deliveryCode, "Incorrect delivery code.");
        shipment.state = ShipmentState.delivered;
    }
    
    function getDeliveryCode(string memory trackingNumber) public onlyReceiver(trackingNumber) view returns (uint256) {
        Shipment storage shipment = shipments[trackingNumber];
        return shipment.deliveryCode;
    }

    function getShipmentDetails(string memory trackingNumber) public view returns (
        address sender,
        address recipient,
        address carrier,
        string memory point,
        ShipmentState state,
        string memory from
    ) {
        Shipment storage shipment = shipments[trackingNumber];
        return (
            shipment.sender,
            shipment.recipient,
            shipment.carrier,
            shipment.point,
            shipment.state,
            shipment.from
        );
    }

    function getAllShipments() public view returns (string[] memory) {
        return shipmentIds;
    }

}