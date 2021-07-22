import React, { useRef } from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ParkingContainer from './components/ParkingContainer/ParkingContainer';
import photo from './AirGarage.png'
import Footer from './components/Footer/Footer'

function App() {
 
  const scrollToDiv = (ref) => window.setTimeout(window.scrollTo({top: 750, behavior: 'smooth'}), 90000);
 const el1 = useRef();
 const el2 = useRef();

  return (
    <div className="App">
        <header className="v-header container">x
            <div className="fullscreen-video-wrap">
                <video  src="https://media.istockphoto.com/videos/car-parking-video-id1046709420" autoplay="true" loop="true" muted="true" type="video/mp4"/>
            </div>
            <div className="header-overlay"></div>
            <div className="header-content">
              <h1>Parking Operations for the 21st Century </h1>
             
              <img className="logo" src={photo} width="850rem" alt="-"></img>
            <SearchBar  reference={el1} click={()=> scrollToDiv(el2)}></SearchBar>
            
            </div>
            
        </header>
        <ParkingContainer reference={el2} click={()=> scrollToDiv(el2)}></ParkingContainer>
        <footer><Footer className="Footer"/></footer>
    </div>
  );
}

export default App;
