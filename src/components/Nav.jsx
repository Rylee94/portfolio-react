import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <ul className="navbar">
            <li className="nav-item">
                <Link to="/" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/Contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
                <Link to="/Portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link to="/Resume" className="nav-link">Resume</Link>
            </li>
        </ul>
    );
}