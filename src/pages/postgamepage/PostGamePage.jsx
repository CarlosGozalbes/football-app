import React from 'react'
import MapOfMatches from "../../components/googleMaps/MapOfMatches";
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/NavBar';
function SearchGamePage() {
  return (
    <div>
      <NavBar />
      <div style={{height:'4.34rem'}}></div>
      <MapOfMatches />
      <Footer/>
    </div>
  );
}

export default SearchGamePage