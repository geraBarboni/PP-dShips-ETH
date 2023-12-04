## Inspiration

In some parts of the world to receive a package of a purchase is necessary to give certain data to corroborate that one is the owner of the package, for example, imagine that we buy a 70-inch TV, and to receive it I need to give my full name, my id or dni, plus my home address which is explicit, and a package that is too obvious. Maybe I don't want to give so many details but still corroborate that I am the owner of the package. This is why dShips was created, a system with the idea of delivering local packages without revealing unnecessary information.

## What it does

It serves as a tool for online stores that need to ship their products to buyers who choose to receive packages anonymously, guaranteeing their correct delivery. Generating anonymous jobs.

## How is this accomplished?
By generating a ZK Proof that corroborates if the owner of the package is who he claims to be.

## Step by step

1. A purchase is made in a marketplace
<img width="800" alt="1" src="https://github.com/geraBarboni/dShips/assets/63870012/11035e30-c64a-4239-949d-6448ab4a8874">

2. The product needs to be purchased, so the purchase becomes a package.
<img width="904" alt="2" src="https://github.com/geraBarboni/dShips/assets/63870012/7e946ca6-ee69-425a-8659-8bebaad7c843">

3. A verified delivery person chooses which parcels to transport
<img width="840" alt="3" src="https://github.com/geraBarboni/dShips/assets/63870012/c009a0b9-b1e8-4502-89ed-e9ded23dffe6">
<img width="976" alt="carrier zk" src="https://github.com/geraBarboni/dShips/assets/63870012/42bb1b6c-4027-4c2b-bd56-c639c7537c3c">

4. The delivery person goes to the store and picks up the package to be transported
<img width="840" alt="4" src="https://github.com/geraBarboni/dShips/assets/63870012/fdd707ca-a1f9-4435-9a49-f48a3b4972a2">

5. The delivery person goes to the buyer's address and verifies that he is the owner of the package to be delivered
<img width="840" alt="5" src="https://github.com/geraBarboni/dShips/assets/63870012/ab58dcd9-ab59-4206-a659-c47032a86857">
<img width="976" alt="buyer zk" src="https://github.com/geraBarboni/dShips/assets/63870012/fd52af26-8216-4b4c-8c76-0090c890b098">

## How we built it

Actually as mentioned before, dShips is a proof of concept, conformed by a smart contract in solidity deployed in XXXXX and a front end developed in NextJs.

## Challenges we ran into

Understanding the users involved

## Accomplishments that we're proud of

Beginning to shape a tool that will be able to provide jobs to people
Create a tool that facilitates the delivery of orders anonymously
Understanding and analyzing the tools available to bring this idea to fruition

## What we learned

Shape the idea
Knowing the Chainlink tools
Knowing Polygon tools
Focusing on a user problem and solving it with web3

## What's next for dShips

Shape dShips as an easy-to-integrate service for online stores to provide an anonymous product delivery option.
Integrate Polygon ID to validate delivery drivers and shoppers
Create a mobile dApp to facilitate the work of the delivery drivers
Devise an optimal system to prevent fraud by delivery drivers
