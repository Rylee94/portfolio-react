import PortfolioCard from '../components/Card'

export default function Portfolio() {
    return (<>
        <div>
            <h2 className='title'>Portfolio</h2>
        </div>
        <div>
            <PortfolioCard
                image={'./assets/project1.jpg'}
                name={'Text Editor'}
                ProjectURL={'https://blooming-sands-12028-8c55ff99bfb0.herokuapp.com/'}
                gitHubURL={'https://github.com/Rylee94/PWA-TextEditor'}

            />
            <PortfolioCard
                image={'./assets/project2.jpg'}
                name={'Coding Quiz'}
                ProjectURL={'https://rylee94.github.io/javascript-quiz-2/'}
                gitHubURL={'https://github.com/Rylee94/javascript-quiz-2'}

            />
            {/* <PortfolioCard
                image={ }
                name={ }
                Pr0jectURL={ }
                gitHubURL

            />
            <PortfolioCard
                image={ }
                name={ }
                Pr0jectURL={ }
                gitHubURL

            />
            <PortfolioCard
                image={ }
                name={ }
                Pr0jectURL={ }
                gitHubURL

            />
            <PortfolioCard
                image={ }
                name={ }
                Pr0jectURL={ }
                gitHubURL

            /> */}
        </div>
    </>)
}