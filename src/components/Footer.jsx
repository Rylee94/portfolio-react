import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="footer">

            <a href="https://github.com/your-github-username" className='icon'>
                <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a href="https://www.linkedin.com/in/rylee-peterson-29572b24b/" className='icon'>
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="https://www.instagram.com/ryleepeterson/" className='icon'>
                <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
        </footer>
    );
}