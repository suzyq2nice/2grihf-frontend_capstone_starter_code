import React from 'react';
import './Navbar.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/Sign_Up/Sign_Up'; 
import Login from './Components/Login/Login';
import LandingPage from './Components/Landing_Page/Landing_Page';

;
function Navbar() {
  const handleClick = () => {
    // Implement your handleClick function here
  };

  return (
    <nav>
      <div className="nav__logo">
        <a href="/">
          StayHealthy{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="26"
            width="26"
            viewBox="0 0 1000 1000"
            style={{ fill: '#3685fb' }}
          >
            <title>Doctor With Stethoscope SVG icon</title>
          </svg>
        </a>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-times fa fa-bars"></i>
      </div>
      <ul className="nav__links active">
        <li className="link">
          <a href="../Landing_Page/LandingPage.html">Home</a>
        </li>
        <li className="link">
          <span href="#">Appointments</span>
        </li>
        <li className="link">
          <span>Health Blog</span>
        </li>
        <li className="link">
          <span>Reviews</span>
        </li>
        <li className="link">
          <a href="../Sign_Up//Sign_Up.html">
            <button className="btn1">Sign Up</button>
          </a>
        </li>
        <li className="link">
          <a href="../Login/Login.html">
            <button className="btn1">Login</button>
          </a>
        </li>
      </ul>
      <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="landing-page" element={<LandingPage />}> 
              <Route path="navbar" element={<Navbar />} /> 
              <Route path="sign-up" element={<SignUp />} /> 
              <Route path="login" element={<Login />} />
              </Routes>
            
        </BrowserRouter>
       
    </div>
    </nav>
  );
}

export default Navbar;