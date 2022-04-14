import React from 'react'
import LandingPage from "../../components/landingPage/LandingPage.jsx";
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer.jsx'
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
export default function HomePage() {
  return (
    <>
      {/* <NavBar /> */}
      <NavBar />
      <div
        className="py-4 d-flex justify-content-end"
        style={{
          witdh: "100%",
          backgroundColor: "#161616",
          paddingRight: "10vw",
        }}
      >
        {" "}
        <Link to="/login">
          <Button
            size="large"
            variant="contained"
            style={{ backgroundColor: "#c4f750", color: "black",marginTop: '4rem' }}
          >
            Log in
          </Button>
        </Link>
      </div>
      
      <LandingPage />
      <Footer />
    </>
  );
}
