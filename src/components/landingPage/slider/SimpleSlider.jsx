import React, { Component } from "react";

import 'antd/dist/antd.css';
import { Avatar } from "@material-ui/core";
import { Carousel } from 'antd';
import './styles.css'


function SimpleSlider() {
  const contentStyle = {
    height: "160px",
    color: "#000000",
    lineHeight: "160px",
    textAlign: "center",
    background: "#fedfc0",
  };

    
    return (
      <Carousel className="py-4"
        style={{
          backgroundColor: "#fedfc0",
        }}  autoplay  autoplaySpeed='100' 
      >
        <div
          className="[ d-flex justify-content-center align-items-center py-4 ]"
          style={{ backgroundColor: "#fedfc0" }}
        >
          <Avatar  className="mr-4" style={{ width: 100, height: 100 }} >JS </Avatar>
          <div>
            <p
              className="mb-0"
              style={{ fontWeight: "600", fontSize: "1.3rem" }}
            >
              John Smith
            </p>
            <p className="mb-0" style={{ fontWeight: "400", width: "60ch" }}>
              Was new to the city and thanks to the app found a new group of
              friends to play football with
            </p>
          </div>
        </div>
        <div
          className="[ d-flex justify-content-center align-items-center py-4 ]"
          style={{ backgroundColor: "#fedfc0" }}
        >
          <Avatar className="mr-4" style={{ width: 100, height: 100 }} />
          <div>
            <p
              className="mb-0"
              style={{ fontWeight: "600", fontSize: "1.3rem" }}
            >
              John Smith
            </p>
            <p className="mb-0" style={{ fontWeight: "400", width: "60ch" }}>
              Was new to the city and thanks to the app found a new group of
              friends to play football with
            </p>
          </div>
        </div>
        <div
          className="[ d-flex justify-content-center align-items-center py-4 ]"
          style={{ backgroundColor: "#fedfc0" }}
        >
          <Avatar className="mr-4" style={{ width: 100, height: 100 }} />
          <div>
            <p
              className="mb-0"
              style={{ fontWeight: "600", fontSize: "1.3rem" }}
            >
              John Smith
            </p>
            <p className="mb-0" style={{ fontWeight: "400", width: "60ch" }}>
              Was new to the city and thanks to the app found a new group of
              friends to play football with
            </p>
          </div>
        </div>
        <div
          className="[ d-flex justify-content-center align-items-center py-4 ]"
          style={{ backgroundColor: "#fedfc0" }}
        >
          <Avatar className="mr-4" style={{ width: 100, height: 100 }} />
          <div>
            <p
              className="mb-0"
              style={{ fontWeight: "600", fontSize: "1.3rem" }}
            >
              John Smith
            </p>
            <p className="mb-0" style={{ fontWeight: "400", width: "60ch" }}>
              Was new to the city and thanks to the app found a new group of
              friends to play football with
            </p>
          </div>
        </div>
      </Carousel>
    );
  
}
export default SimpleSlider
