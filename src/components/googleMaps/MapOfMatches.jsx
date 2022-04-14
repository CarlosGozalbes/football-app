import React from "react";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  Popup, useMapEvents
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './style.css'
import soccerfieldicon from './../../assets/soccerfieldicon.png'
import {FaFutbol} from 'react-icons/fa'
import { Icon } from "leaflet";
import { GiSoccerField } from "react-icons/gi";

const center={lat:40.416729, lng:-3.703339}
const pitch = new Icon({
  iconUrl:  {FaFutbol} ,
  iconSize: [25, 25],
});



function LocationMarkers() {
  const initialMarker= { lat:40.416729, lng:-3.703339};
  const [marker, setMarker] = useState(initialMarker);

  const map = useMapEvents({
    click(e) {
      setMarker(e.latlng);
      
    },
  });

  return (
    <Marker icon={pitch} position={marker}>
      
      <Popup>You are here</Popup>
    </Marker>
  );
}
 
// const position = [40.416729, -3.703339];
// function LocationMarker() {
//   const [position, setPosition] = useState(null);
//   const map = useMapEvents({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });
//   return position === null ? null : (
//     <Marker
//       position={position}
//       //icon={pitch}
//       /* onClick={() => {
//         setActiveMatch(match);
//       }} */
//     >
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }




function MapOfMatches() {
  
  return (
    <MapContainer
      center={[40.416729, -3.703339]}
      zoom={11}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LocationMarker /> */}
      <LocationMarkers />

      <ZoomControl position="topright" />
    </MapContainer>
  );
}

export default MapOfMatches;

// import React, {useState} from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMapEvents,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// function LocationMarker() {
//   const [position, setPosition] = useState(null);
//   const map = useMapEvents({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }
// function MapOfMatches() {
//   return (
//     <MapContainer
//       center={{ lat: 51.505, lng: -0.09 }}
//       zoom={13}

//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LocationMarker />
//     </MapContainer>
//   );
// }

// export default MapOfMatches;
