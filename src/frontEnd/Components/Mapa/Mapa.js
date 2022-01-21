import React, { useState, useEffect } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  SVGOverlay,
  GeoJSON,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { Link } from "react-router-dom";

import "./Mapa.css";
import icon from "../../Assets/CentrarLogo/icon.png";
import api from "../../Services/api";

import markerVerde from "../../Assets/Icons/Markers/markerVerde.png";
import markerAmarelo from "../../Assets/Icons/Markers/markerAmarelo.png";
import markerVermelho from "../../Assets/Icons/Markers/markerVermelho.png";
import markerUnavailable from "../../Assets/Icons/Markers/markerUnavailable.png";

import distritos from "../../Assets/CoordenadasDistritos/coordendas.json"


//limites da layer azul clara
const bounds = [
  [58.39, -72.39],
  [15.81, 47.15],
];



function getIcon(risco, disponibilidade) {
  let marker;
  if (!disponibilidade) marker = markerUnavailable;
  else if (risco < 0.5) marker = markerVerde;
  else if (risco < 0.88) marker = markerAmarelo;
  else marker = markerVermelho;

  return L.icon({
    iconUrl: marker,
    iconSize: 30,
    popupAnchor: [0, -20], // move o popup [direita, baixo]
  });
}

const createClusterCustomIcon = function (cluster) {
  //Falta criar aqui uma forma de alterar a cor com base no interior do cluster
  return L.divIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: "marker-cluster-custom",
    iconSize: L.point(40, 40, true),
  });
};

function Mapa() {
  const [lojas, setLojas] = useState([]);
  useEffect(() => {
    api.get("loja").then((data) => {
      setLojas(data.data);
    });
  }, []);

  return (
    <MapContainer
      center={[39.6, -8]}
      zoom={7}
      scrollWheelZoom={true}
      minZoom={7}
      doubleClickZoom={false}
      style={{ borderRadius: 5 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />

      <SVGOverlay bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="lightblue" />
      </SVGOverlay>

      <GeoJSON
        data={distritos.features}
      />

      <MarkerClusterGroup
        iconCreateFunction={createClusterCustomIcon}
        disableClusteringAtZoom={15}
        maxClusterRadius={100}
        animateAddingMarkers={true}
        showCoverageOnHover={false}
      >
        {lojas.map((continente) => (
          <Marker
            position={[
              parseFloat(continente.Lat.replace(",", ".")),
              parseFloat(continente.Long.replace(",", ".")),
            ]}
            icon={getIcon(
              parseFloat(continente.Nivel_risco),
              continente.Disponivel
            )}
            // icon={getIcon(parseFloat(continente.Nivel_risco.replace(",", ".")), continente.Disponivel)} // Este nao funciona porque a maioria nao tem o risco para fazer replace
            interactive={continente.Disponivel}
          >
            <Popup>
              <h3>{continente.Nome}</h3>
              <p>
                Lat: {parseFloat(continente.Lat.replace(",", "."))}
                <br />
                Long: {parseFloat(continente.Long.replace(",", "."))}
                <br />
                Nivel de Risco: {continente.Nivel_risco}
              </p>
              <Link to={`/Loja/:${continente._id}`}>Ver Mais</Link>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Mapa;
