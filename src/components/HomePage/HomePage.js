import React from 'react';
import appleargg from '../assets/appleargg.png'; 
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>¡Bienvenido a Apple Argentina!</h1>
      <div className="image-container">
        <img src={appleargg} alt="AppleArg" className="apple-image" />
        <h1>Encuentra lo último en productos de Apple con envíos a todo el país.</h1>
      </div>
    </div>
    
  );
};

export default HomePage;