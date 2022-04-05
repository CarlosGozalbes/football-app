import React from 'react'
import './styles.css'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Image} from "react-bootstrap"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import appPreview from "./../../assets/herosectionpreview.jpg"
import findlocal from "./../../assets/localgames.png";
import playfootball from "./../../assets/playfootball.jpg";
function HeroSection() {
  return (
    <>
      <div className="[ herosection__container ] [ d-flex justify-content-center align-items-center ]">
        <div className="[ herosection__left ]">
          <h1>The simplest way to play football in your city</h1>
          <h4 className="[ herosection__subtitles ][ mt-4 ]">
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
      </div>

      <div>SOCIAL PROOF slider</div>
      <div className="[ benefits__section ] [ d-flex justify-content-between ]">
        <div className="d-flex flex-column">
          <Image
            src={findlocal}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="d-flex flex-column">
          <p> Click and join preview</p>
        </div>
        <div className="d-flex flex-column">
          <Image
            src={playfootball}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div>Features</div>
      <div>footer</div>
    </>
  );
}

export default HeroSection