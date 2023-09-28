import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function PortfolioCard(props) {
    return (
        <>
            <div className="card">
                <img className="card-image" src={props.image} alt="" />
                <h2 className="card-name">{props.name}</h2>
                <div className="card-link">
                    <a href={props.ProjectURL} className="project-link">
                    </a>
                    <a href={props.gitHubURL} className="project-link-github">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                </div>
            </div>
        </>
    );
}
