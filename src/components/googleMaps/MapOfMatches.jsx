import React from "react";
import { useCallback, useMemo, useRef, useState,useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  Popup, useMapEvents
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './style.css'
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import '../googleMaps/style.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import Geolocation from "@react-native-community/geolocation";
// import soccerfieldicon from './../../assets/soccerfieldicon.png'
// import {FaFutbol} from 'react-icons/fa'
// import { Icon } from "leaflet";
// import { GiSoccerField } from "react-icons/gi";




function LocationMarkers({marker, setMarker}) {
  
/* const pitch = new Icon({
  iconUrl: { FaFutbol },
  iconSize: [25, 25],
}); */
  const map = useMapEvents({
    click(e) {
      setMarker(e.latlng);
      
    },
  });

  return (
    <Marker
      position={marker}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    >
      <Popup>Set game here</Popup>
    </Marker>
  );
}
 





function MapOfMatches() {
 /*  const initialMarker = { lat: 40.416729, lng: -3.703339 }; */
  const [error, setError] = useState(""); 
 const [center, setCenter] = useState({ 'lat': 40.416729, 'lng': -3.703339 });
  const [marker, setMarker] = useState({ 'lat': 40.416729, 'lng': -3.703339 });
  const [nameOfThePlace, setNameOfThePlace] = useState("")
  const [sport, setSport] = useState("")
  const [date, setDate] = useState(new Date);
  const [numberOfPlayersPerTeam, setnumberOfPlayersPerTeam] = useState("");
  const [pricePerPerson, setpricePerPerson] = useState("");
  const [details, setDetails] = useState("");
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (pos) => {
       setError("");
        setCenter({
          'lat': pos.coords.latitude,
          'lng': pos.coords.longitude,
        });
      },
      (e) => setError(e.message)
    );
    /* if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let latitute = position.coords.latitude;
        let longitude = position.coords.longitude;
        setCenter({ lat: latitute });
        setCenter({ lng: longitude });
      });
    } else {
      console.log("Geolocation not suported");
    } */
  },);
  return (
    <>
      <div className="post-page-container d-flex justify-content-center">
        <form
          /* onSubmit={handleRegister} */ className=" [ d-flex flex-column mx-4 ] [ form-post-game ] "
        >
          <label htmlFor="email" className="mb-0">
            <b> Name of the place</b>
          </label>

          <input
            style={{ padding: "0.5rem" }}
            value={nameOfThePlace}
            onChange={(e) => setNameOfThePlace(e.target.value)}
            className="mb-4"
            type="text"
            id="email"
            placeholder="name of the place..."
          />
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <label htmlFor="sport" className="mb-0">
                <b> Sport</b>
              </label>

              <input
                style={{ padding: "0.5rem" }}
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="mb-4"
                type="text"
                id="sport"
                placeholder="sport..."
              />
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="people" className="mb-0">
                <b> People per team</b>
              </label>

              <input
                style={{ padding: "0.5rem" }}
                value={numberOfPlayersPerTeam}
                onChange={(e) => setnumberOfPlayersPerTeam(e.target.value)}
                className="mb-4"
                type="number"
                id="people"
                placeholder="5"
              />
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="price" className="mb-0">
                <b> Price per person</b>
              </label>
              <div>
                <input
                  style={{ padding: "0.5rem" }}
                  value={pricePerPerson}
                  onChange={(e) => setpricePerPerson(e.target.value)}
                  className="mb-4"
                  type="number"
                  id="price"
                  placeholder="1"
                />{" "}
                <span>
                  {" "}
                  <b>€</b>{" "}
                </span>
              </div>
            </div>
          </div>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
            />
          </LocalizationProvider>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <label htmlFor="description" className="mb-0 mt-4">
                <b> Description and details</b>
              </label>

              <textarea
                style={{ width: "30vw", height: "41vh", padding:'0.5rem' }}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className=""
                type="text"
                id="description"
                placeholder="details..."
              />
            </div>
            <div className="d-flex flex-column">
              <b className="mt-4">Select the place</b>
              <MapContainer
                className=""
                /* center={[40.416729, -3.703339]} */
                center={center}
                zoom={11}
                scrollWheelZoom={true}
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationMarkers marker={marker} setMarker={setMarker} />

                <ZoomControl position="topright" />
              </MapContainer>
            </div>
          </div>
          <button
            type="submit"
            /* onClick={() => handelRegister()} */

            className="mt-4 post-game-button"
          >
            Post game
          </button>
        </form>
      </div>
    </>
  );
}


export default MapOfMatches;

