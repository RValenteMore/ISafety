import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import './Mapa.css';
import icon from '../../Assets/CentrarLogo/icon.png'
import continentesCoordenadas from '../../Assets/CoordenadasContinentes/coordenadas.json'

import markerVerde from '../../Assets/Icons/Markers/markerVerde.png'
import markerAmarelo from '../../Assets/Icons/Markers/markerAmarelo.png'
import markerVermelho from '../../Assets/Icons/Markers/markerVermelho.png'
import markerUnavailable from "../../Assets/Icons/Markers/markerUnavailable.png"


function getIcon(risco, disponibilidade){
  let marker;
  if(!disponibilidade)
    marker = markerUnavailable;
  else if(risco < 0.5)
    marker = markerVerde;
  else if (risco < 0.8)
    marker = markerAmarelo;
  else
    marker = markerVermelho
  
  
  return L.icon({
    iconUrl: marker,
    iconSize: 30,
    popupAnchor: [0, -20], // move o popup [direita, baixo]
  })
}

function Mapa() {
  return (
    <MapContainer 
      center={[39.6, -8]}
      zoom={7}
      scrollWheelZoom={true}
      minZoom={7}
      doubleClickZoom={false}
      style={{borderRadius: 5}}
      >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />

      {continentesCoordenadas.map(continente => (
        <Marker position={[continente.latitude, continente.longitude]} icon={getIcon(continente.risco, continente.disponibilidade)} interactive={continente.disponibilidade}>
        <Popup>
          <h3>{continente.nome}</h3>
          <p>Probabiliadede de acidente: {continente.risco * 100}%</p>
        </Popup>
      </Marker>
      )) }          
      
    </MapContainer>
  );
}

export default Mapa;
