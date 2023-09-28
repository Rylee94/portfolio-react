import PortfolioCard from '../components/Card';

export default function Portfolio() {
    return (
        <>
            <div>
                <h2 className='title'>Portfolio</h2>
            </div>
            <div className='cards'>
                <PortfolioCard
                    image={'public/assets/project1.png'}
                    name={'Text Editor'}
                    ProjectURL={'https://blooming-sands-12028-8c55ff99bfb0.herokuapp.com/'}
                    gitHubURL={'https://github.com/Rylee94/PWA-TextEditor'}
                />
                <PortfolioCard
                    image={'public/assets/project2.png'}
                    name={'Coding Quiz'}
                    ProjectURL={'https://rylee94.github.io/javascript-quiz-2/'}
                    gitHubURL={'https://github.com/Rylee94/javascript-quiz-2'}
                />
                <PortfolioCard
                    image={'public/assets/project3.png'}
                    name={'OnlyGigs'}
                    ProjectURL={'https://sheltered-inlet-74192-222de79efe22.herokuapp.com/'}
                    gitHubURL={'https://github.com/BenWhann/OnlyGigs'}
                />
                <PortfolioCard
                    image={'public/assets/project4.png'}
                    name={'Note Taker'}
                    ProjectURL={'https://rylees-notebook-738088f4224f.herokuapp.com/'}
                    gitHubURL={'https://github.com/Rylee94/express-note-taker'}
                />
            </div>
        </>
    );
}