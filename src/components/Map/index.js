import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.css";

export default function CovidMap({ countries }) {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "#333",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name} ${confirmedText}`);
  };

  return (
    <MapContainer
      center={[0, -0.09]}
      zoom={2}
      style={{ height: "70vh" }}
      minZoom={1}
    >
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
}
