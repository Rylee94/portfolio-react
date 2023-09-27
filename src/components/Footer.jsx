import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="footer-container">

            <a href="https://github.com/your-github-username">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/rylee-peterson-29572b24b/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/ryleepeterson/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </footer>
    );
}