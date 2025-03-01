import { Link } from 'react-router-dom';  // Import the Link component from react-router-dom
import "./Navbar.css";

function Navbar() {
    return(
        <nav>
            <div className="nav__logo">
                <Link to="/">StayHealthy</Link> {/* Use Link instead of a */}
            </div>

            <ul className="nav__links active">
                <li className="link">
                    <Link to="/">Home</Link> {/* Use Link instead of a */}
                </li>
                <li className="link">
                    <Link to="#">Appointments</Link> {/* Example, can be updated later */}
                </li>
                <li className="link">
                    <Link to="/Sign_Up"> {/* Use Link instead of a */}
                        <div className="button1">Sign Up</div>
                    </Link>
                </li>
                <li className="link">
                    <Link to="/Login"> {/* Use Link instead of a */}
                        <div className="button1">Login</div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
