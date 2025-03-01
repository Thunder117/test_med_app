import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ReactDOM from 'react-dom';

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, appointment data, and notification visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [notificationVisible, setNotificationVisible] = useState(false); // To control notification visibility

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      setNotificationVisible(true); // Show the notification when appointment data is available
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div>
      {/* Render Navbar component */}
      <Navbar />
      {/* Render children components */}
      {children}

      {/* Render notification with additional details */}
      {isLoggedIn && appointmentData && 
        ReactDOM.createPortal(
          <div className="notification-container">
            <div className="notification-card">
              <h3 className="notification-title">Appointment Details</h3>
              <p><strong>Booked By:</strong> {username}</p> {/* Display username who booked the appointment */}
              <p><strong>Doctor:</strong> {doctorData?.name}</p> {/* Display doctor's name */}
              <p><strong>Appointment Date:</strong> {appointmentData?.date}</p> {/* Display appointment date */}
              <p><strong>Appointment Time:</strong> {appointmentData?.time}</p> {/* Display appointment time */}
            </div>
          </div>, 
          document.body // This will append it directly to the body element, outside the normal component hierarchy
        )
      }
    </div>
  );
};

export default Notification;
