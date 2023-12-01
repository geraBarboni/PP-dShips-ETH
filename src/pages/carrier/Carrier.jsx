import CarrierId from "@/components/carrier/CarrierId/CarrierId";
import MyShipments from "@/components/carrier/MyShips/MyShipments";
import OpenToShip from "@/components/carrier/OpenToShip/OpenToShip";
import useGeolocation from "@/hooks/useGeolocation";
import React, { useEffect, useState } from "react";

const Carrier = () => {
  const [activeSection, setActiveSection] = useState("myShips");

  const { userCoordinates } = useGeolocation();

  /*
  const [userCoordinates, setUserCoordinates] = useState(null);

  //TODO: pass this function to a hook
  function Geolocalizacion() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setUserCoordinates([longitude, latitude]);
        },
        function (error) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error(
                "Acceso a la geolocalización denegado por el usuario."
              );
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Información de ubicación no disponible.");
              break;
            case error.TIMEOUT:
              console.error(
                "Tiempo de espera agotado al obtener la ubicación."
              );
              break;
            case error.UNKNOWN_ERROR:
              console.error("Ocurrió un error desconocido.");
              break;
          }
        }
      );
    } else {
      console.log("El navegador no admite la geolocalización.");
    }
  }

  */
  useEffect(() => {
    console.log("userCoordinates from carrier", userCoordinates);
  }, [userCoordinates]);

  return (
    <div className="flex flex-col gap-6 font-medium relative">
      <div className="flex relative w-full h-fit">
        <div className="flex gap-2 w-fit">
          <button
            className={
              activeSection == "myShips"
                ? "bg-schemes-light-primary text-schemes-light-onPrimary hover:bg-coreColors-primary rounded-full py-2 px-4"
                : "py-2 px-4 rounded-full hover:bg-coreColors-secondary hover:text-schemes-light-onSecondary transition duration-200"
            }
            onClick={() => {
              setActiveSection("myShips");
            }}
          >
            My ships
          </button>
          <button
            className={
              activeSection == "open"
                ? "bg-schemes-light-primary text-schemes-light-onPrimary hover:bg-coreColors-primary rounded-full py-2 px-4"
                : "py-2 px-4 rounded-full hover:bg-coreColors-secondary hover:text-schemes-light-onSecondary transition duration-200"
            }
            onClick={() => {
              setActiveSection("open");
            }}
          >
            Open to ship
          </button>
        </div>

        <CarrierId />
      </div>
      <div>
        {activeSection == "myShips" && userCoordinates !== null && (
          <MyShipments userCoordinates={userCoordinates} />
        )}
        {activeSection == "open" && userCoordinates !== null && (
          <OpenToShip userCoordinates={userCoordinates} />
        )}
      </div>
    </div>
  );
};

export default Carrier;
