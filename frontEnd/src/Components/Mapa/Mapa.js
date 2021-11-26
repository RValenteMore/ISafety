import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Mapa.css';

function Mapa() {
  return (
    <MapContainer center={[39.6, -8]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[41.803947324226186, -6.787917939108926]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;
