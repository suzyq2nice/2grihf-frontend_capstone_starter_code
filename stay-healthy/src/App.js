import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/Sign_Up'; 
import Login from './Components/Login';
import Navbar from './Components/Navbar'; 
import LandingPage from './Components/Landing_Page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="landing-page" element={<LandingPage />}>
          <Route path="navbar" element={<Navbar />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
