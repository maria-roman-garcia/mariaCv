import React from 'react';
//Components
import ProjectCard from './ProjectCard';
//Parser
import ReactHtmlParser from 'react-html-parser';
//All tecnologies
import iconAdobeXd from '../img/logoProjects/adobeXd.png';
import iconAdobeIllustrator from '../img/logoProjects/adobeIllustrator.png';
import iconBootstrap from '../img/logoProjects/bootstrap.png';
import iconCss from '../img/logoProjects/css.png';
import iconFigma from '../img/logoProjects/figma.png';
import iconFontAwesome from '../img/logoProjects/fontAwesome.png';
import iconGit from '../img/logoProjects/git.png';
import iconGitHub from '../img/logoProjects/gitHub.png';
import iconHtml from '../img/logoProjects/html.png';
import iconJavaScript from '../img/logoProjects/javaScript.png';
import iconMySql from '../img/logoProjects/mySql.png';
import iconNodeJs from '../img/logoProjects/nodeJS.png';
import iconPhotoshop from '../img/logoProjects/photoshop.png';
import iconReact from '../img/logoProjects/react.png';
import iconSass from '../img/logoProjects/sass.png';
import trello from '../img/logoProjects/trello.png';
import jiraConfluence from '../img/logoProjects/jiraConfluence.png';
import typescript from '../img/logoProjects/typescript.png';
import iconJava from '../img/toolsIcons/developer/iconJava.png';
import iconPostgresql from '../img/toolsIcons/developer/iconPostgre.png';
import iconNetbeans from '../img/toolsIcons/developer/netbeans.png';
//Projects mockups
import Nonogram from '../img/projectsMockups/nonogramEditada.jpg';
import OneToFifty from '../img/projectsMockups/oneToFiftyEditada.jpg';
import Films from '../img/projectsMockups/filmsEditada.jpg';
import MasterMindQuiz from '../img/projectsMockups/masterQuizEditada.png';
import OpenTrivia from '../img/projectsMockups/openTriviaEditada.jpg';
import LaPajita from '../img/projectsMockups/laPajitaEditada.jpg';
import OneSearch from '../img/projectsMockups/oneSearchEditada.png';
import LaVanguardia from '../img/projectsMockups/LaVanguardiaEditada.png';
import Pokemon from '../img/projectsMockups/pokemonApp.jpg';
import Acqua from '../img/projectsMockups/acquaApp.jpg';

const Projects = () =>{

    const allProjects = [
        {
            tecnologies: [iconReact, iconJavaScript, iconJava, iconPostgresql, iconNetbeans, iconBootstrap, iconGit, iconHtml, iconSass],
            title: "Acqua Web",
            description: `Web developed at <span class="importantText">#Delonia Software SL.</span> for <span class="importantText">#Acqua Telecom</span>, a telecommunications operator that offers fiber and mobile services throughout Spain.`,
            img:Acqua,
            gitHubLink: undefined,
            projectLink: 'https://www.acquatele.com/WebAcqua/Web'
        },
        {
            tecnologies: [iconReact, iconJavaScript, typescript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconFontAwesome, iconGitHub],
            title: "Pokemon app",
            description: `Project done using the RESTful API of pokeapi with <span class="importantText">#ReactJS</span> <img src=${iconReact}/> and <span class="importantText">#Typescript</span> <img src=${typescript}/>.`,
            img:Pokemon,
            gitHubLink: 'https://github.com/maria-roman-garcia/pokemon-typescript',
            projectLink: 'https://pokemon-api-app.netlify.app/'
        },
        {
            tecnologies: [iconReact, iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconFontAwesome, iconAdobeIllustrator, iconGitHub, trello],
            title: "Nonogram (Game)",
            description: `Multi-level logic game created with <span class="importantText">#ReactJS</span> <img src=${iconReact}/> and developed at the request of Page 64 along with other games for inclusion in the entertainment section of <span class="importantText">#La Vanguardia</span> newspaper in Barcelona.`,
            img:Nonogram,
            gitHubLink: 'https://github.com/wcsGames/nonograma',
            projectLink: 'https://nonogram-game.netlify.app'
        },
        {
            tecnologies: [iconReact, iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconFontAwesome, iconAdobeIllustrator, iconGitHub, trello],
            title: "One To Fifty (Game)",
            description: `A game of visual sharpness and speed created with <span class="importantText">#ReactJS</span> <img src=${iconReact}/> and developed at the request of Page 64 along with other games for inclusion in the entertainment section of the <span class="importantText">#La Vanguardia</span> newspaper in Barcelona. Be the fastest to complete the sequence from 1 to 50. Every thousandth counts!`,
            img:OneToFifty,
            gitHubLink: 'https://github.com/wcsGames/oneToFifty',
            projectLink: 'https://onetofifty.netlify.app'
        },
        {
            tecnologies: [iconReact, iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconFontAwesome, iconAdobeIllustrator, iconGitHub, iconMySql, iconNodeJs, jiraConfluence],
            title: "Game section for La Vanguardia newspaper",
            description: `Game section developed for <span class="importantText">#La Vanguardia</span> newspaper in three months with <span class="importantText">#React</span> <img src=${iconReact}/>, <span class="importantText">#Node</span> <img src=${iconNodeJs}/> and <span class="importantText">#MySql</span> <img src=${iconMySql}/> . The project includes both a section of entertainment games, as the insertion of customizable iframes on the cover of each section of the newspaper. In addition to a login page where you can manage your personal account and your ranking.`,
            img:LaVanguardia,
            gitHubLink: 'https://github.com/LaVanguardia/LaVanguardia-Fullstack',
            projectLink: 'https://amazing-agnesi-bd2892.netlify.app'
        },
        {
            tecnologies: [iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconAdobeIllustrator, iconGitHub, iconAdobeXd, iconPhotoshop, trello],
            title: "Quizz (Game)",
            description: `Question and answer game created with <span class="importantText">#VanillaJS</span> <img src=${iconJavaScript}/> <span class="importantText">#HTML</span> <img src=${iconHtml}/> and <span class="importantText">#CSS</span>. <img src=${iconCss}/> Answer all possible questions well and get points.`,
            img:MasterMindQuiz,
            gitHubLink: 'https://github.com/mastermindQuiz',
            projectLink: 'https://mastermind-wcs.netlify.app'
        },
        {
            tecnologies: [iconReact, iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconFontAwesome, iconAdobeIllustrator, iconGitHub, iconFigma, trello],
            title: "Open Trivia (Game)",
            description: `Improved version of the Master Mind Quizz game created with <span class="importantText">#ReactJS</span> <img src=${iconJavaScript}/> in which we work with the Open Trivia DB <span class="importantText">#API</span> Select the category, the difficulty and the number of questions and try to get as many points as possible. Don't worry, you'll get the right answers in the end.`,
            img:OpenTrivia,
            gitHubLink: 'https://github.com/maria-roman-garcia/openTriviaDatabaseGame',
            projectLink: 'https://opentriviagame.netlify.app'
        },
        {
            tecnologies: [iconReact, iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconFontAwesome, iconAdobeIllustrator, iconGitHub, iconFigma, trello],
            title: "One Search",
            description: `An application to search and compare information from Twitter, Wikipedia and Wikipedia-images. Made with <span class="importantText">#ReactJS</span> <img src=${iconReact}/> and <span class="importantText">#API</span> Rest.`,
            img:OneSearch,
            gitHubLink: 'https://github.com/maria-roman-garcia/oneSearch',
            projectLink: 'https://wcs-onesearch.netlify.app'
        },
        {
            tecnologies: [iconReact, iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconFontAwesome, iconAdobeIllustrator, iconGitHub, iconFigma, iconMySql, iconNodeJs, iconAdobeXd, iconPhotoshop, trello],
            title: "Dynamic waiting list management",
            description: `Web app made during the EU Hackathon of <span class="importantText">#WCS</span> for the startup <span class="importantText">#LaPajita</span>, with which you can manage the waiting list of the bars, their location, menu, opinions and much more, made with <span class="importantText">#ReactJS</span> <img src=${iconReact}/> and <span class="importantText">#NodeJS</span> <img src=${iconNodeJs}/> for the backend.`,
            img:LaPajita,
            gitHubLink: 'https://github.com/LaPajita',
            projectLink: 'https://lapajita-waiting-list.netlify.app'
        },
        {
            tecnologies: [iconReact, iconJavaScript, iconBootstrap, iconGit, iconHtml, iconSass, iconCss, iconFontAwesome, iconAdobeIllustrator, iconGitHub, iconAdobeXd, iconPhotoshop, trello],
            title: "Films discover",
            description: `Video store emulator where you can search for movies and filter them by genres, add them to your list of favorites or choose one at random.`,
            img:Films,
            gitHubLink: 'https://github.com/maria-roman-garcia/Film-API-and-Hooks',
            projectLink: 'https://discover-films.netlify.app'
        }
    ]
    return(
        <div className="Projects maxScreenSize">
            <p className="sectionTitle">Projects</p>
            {allProjects.map((project, index)=>
                <ProjectCard
                key={index}
                tecnologies={project.tecnologies}
                title={project.title}
                description={ReactHtmlParser(project.description)}
                img={project.img}
                gitHubLink={project.gitHubLink}
                projectLink={project.projectLink} />
            )}
        </div>
    )
}

export default Projects;