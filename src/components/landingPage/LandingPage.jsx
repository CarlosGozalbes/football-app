import React from 'react'
import './styles.css'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Image} from "react-bootstrap"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import appPreview from "./../../assets/herosectionpreview.jpg"
import findgames from "./../../assets/findgames.png";
import playfeelgood from "./../../assets/playfeelgood.png";
import clickjoin from "./../../assets/clickjoin.png";
import SimpleSlider from './slider/SimpleSlider';

function LandingPage() {
  
  
  
  
  return (
    <>
      <section className="[ herosection__container ] [ d-flex justify-content-center align-items-center ]">
        <div className="[ herosection__left ]">
          <h1 style={{ color: "white" }}>
            The simplest way to play football in your city
          </h1>
          <h4
            style={{ color: "white" }}
             className="[ herosection__subtitles ][ mt-4 ]"
          >
            Play today with new alike teammates
          </h4>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
            className="mt-4"
            style={{ textTransform: "none" }}
          >
            Log in and start playing{" "}
            <ArrowForwardIcon className="ml-3" fontSize="small" />
          </Button>
        </div>
        <div>
          <Image
            src={appPreview}
            style={{ height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
      </section>
      <section className="[ benefits__section ] [ d-flex justify-content-between ]">
        <div className="d-flex flex-column">
          <Image
            className="my-3"
            src={findgames}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />{" "}
          <p className="m-auto">FIND LOCAL GAMES</p>
        </div>
        <div className="d-flex flex-column">
          <Image
            className="my-3"
            src={clickjoin}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />

          <p className="m-auto"> CLICK &amp; JOIN</p>
        </div>
        <div className="d-flex flex-column">
          <Image
            className="my-3"
            src={playfeelgood}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />{" "}
          <p className="m-auto"> PLAY AND FEEL GOOD</p>
        </div>
      </section>
      <SimpleSlider />

      <div>Features</div>
      <section className="[ spoonsor__section ] [ py-3 d-flex flex-column ]">
        <h5 className="spoonsor__text">
          {" "}
          Are you a sporting organisation, charity or brand interested in
          working with us?{" "}
        </h5>
        <Box className="m-auto" sx={{ "& button": { m: 1 } }}>
          <Button
            variant="contained"
            className="getintouch__button"
            size="large"
          >
            Get in Touch
          </Button>
        </Box>
      </section>
    </>
  );
}

export default LandingPage

