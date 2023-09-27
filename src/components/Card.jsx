export default function PortfolioCard(props) {
    return (
        <>
            <div className="card">
                <img className='card-image' src={props.image} alt="" />
                <h2 className='card-title'>{props.name}</h2>
                <div className="card-links">
                    <a href={props.ProjectURL} className="card-link-deployed"> <img src="" alt="" /></a>
                    <a href={props.gitHubURL} className="card-link-github"> <img src="" alt="" /></a>
                </div>
            </div>
        </>
    )
}