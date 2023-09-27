import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <ul>
            <li>
                <Link to="/" className="">About</Link>
            </li>
            <li>
                <Link to="/Contact" className="">Contact</Link>
            </li>
            <li>
                <Link to="/Portfolio" className="">Portfolio</Link>
            </li>
            <li>
                <Link to="/Resume" className="">Resume</Link>
            </li>
        </ul>
    );
}