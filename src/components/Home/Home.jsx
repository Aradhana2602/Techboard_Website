import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'; 
import './Home.css'

// import ParticlesBackground from './ParticlesBackground';

function Home() {
  
  return (
    <div className="home">
       
      <Navbar />
      
      <div className="landingpage">
        <div className="intro">
            TECHNICAL BOARD
        </div>
       <img src="/TB-Logo.png" alt="" />
       </div>
        
     
    </div>
  );
}

export default Home;


