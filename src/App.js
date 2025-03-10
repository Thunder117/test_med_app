// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileCard/ProfileCard';

// Function component for the main App
function App() {
  // Render the main App component
  return (
    <div className="App">
      {/* Set up BrowserRouter for routing */}
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar />
        {/* Display Notification on all pages */}
        <Notification>
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<Landing_Page />} />
            <Route path="/ReviewForm" element={<ReviewForm />} />
            <Route path="/Sign_Up" element={<Sign_Up />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ProfileForm" element={<ProfileForm />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            {/* Add other routes as necessary */}
          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
