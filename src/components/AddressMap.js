import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import customMarkerIcon from "../assets/company_logo.png";

const AddressMap = () => {
  const position = [28.694846, 77.0557653]; // Delhi's latitude and longitude

  const icon = new L.Icon({
    iconUrl: customMarkerIcon,
    iconSize: [30, 30],
    popupAnchor: [0, -15],
  });

  return (
    <div className="flex items-center justify-center p-10">
      <MapContainer
        center={position}
        zoom={40}
        className="h-[20rem] w-full rounded-xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup
            autoPan={false}
            autoClose={false}
            closeButton={false}
            closeOnClick={false}
          >
            <div style={{ maxWidth: "200px" }}>
              <p>
                C/O Genda Ram, E-3/182, Near Gurudwara, Sultan Puri, Sultanpuri
                C Block, North West Delhi, Delhi-110086
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AddressMap;
