import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    localStorage.removeItem("doctorData");

    // Remove the reviewFormData from local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }

    setIsLoggedIn(false);
    setEmail('');
    window.location.reload();
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    const storedName = sessionStorage.getItem("name");

    if (storedEmail && storedName) {
      setIsLoggedIn(true);
      setUsername(storedName); // Use stored name instead of email for the welcome message
    }
  }, []);

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy <i style={{ color: "#2190FF" }} className="fa fa-user-md"></i>
        </Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={click ? "nav__links active" : "nav__links"}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/search/doctors">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/healthblog">Health Blog</Link>
        </li>
        <li className="link">
          <Link to="/reviews">Reviews</Link>
        </li>

        {/* Conditional rendering for logged-in users */}
        {isLoggedIn ? (
          <>
            <li className="link">
              <span>Welcome, {username}</span> {/* Welcome message */}
            </li>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/Sign_Up">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/Login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
