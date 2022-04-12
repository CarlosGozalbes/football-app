import React from 'react'
import { BsGoogle, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import './styles.css'
function Footer() {
  return (
    <footer className="[ footer__ ] [ d-flex flex-column justify-content-center align-items-center  py-3 ] ">
      <div>
        <a href="" className="mr-3">
          About us
        </a>
        |
        <a href="" className="mx-3">
          Contact us
        </a>
        |
        <a href="" className="ml-3">
          Terms
        </a>{" "}
      </div>
      <div className="[ d-flex flex-column mt-2 ]">
        <h5 className="d-flex justify-content-center" style={{color:'white'}}>Follow</h5>{" "}
        <div>
          {" "}
          <BsGoogle className="google__icon mr-3" />
          <BsFacebook className="facebook__icon mr-3" />
          <BsTwitter className="twitter__icon mr-3" />
          <BsInstagram className="instagram__icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer