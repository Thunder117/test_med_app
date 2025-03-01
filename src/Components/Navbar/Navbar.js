import "./Navbar.css"

function Navbar() {
    return(
        <nav>
            <div className="nav__logo">
            <a href="/">
                StayHealthy 
            </a>
            </div>
        

            <ul className="nav__links active">
            <li className="link">
                <a href="../Landing_Page/LandingPage.html">Home</a>
            </li>
            <li className="link">
                <a href="#">Appointments</a>
            </li>
            <li className="link ">
                <a href="../Sign_Up//Sign_Up.html">
                <div className="button1">Sign Up</div>
                </a>
            </li>
            <li className="link">
                <a href="../Login/Login.html">
                <div className="button1">Login</div>
                </a>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar;