
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your Landing Page route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HeroSection />} />
          {/* Add other routes for the Landing Page components */}
        </Route>

        {/* Define other routes for different parts of your application */}
        {/* For example: */}
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
