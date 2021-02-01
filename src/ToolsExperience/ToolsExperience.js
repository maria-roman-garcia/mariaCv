import React from 'react';
import './ToolsExperience.scss';
//Img developer
import iconJs from '../img/toolsIcons/developer/iconJs.jpg';
import iconSass from '../img/toolsIcons/developer/iconSass.png';
import iconBootstrap from '../img/toolsIcons/developer/iconBootstrap.png';
import iconJava from '../img/toolsIcons/developer/iconJava.png';
import iconReact from '../img/toolsIcons/developer/iconReact.png';
import iconOracle from '../img/toolsIcons/developer/iconOracle.png';
import iconPostgre from '../img/toolsIcons/developer/iconPostgre.png';
import iconHtml from '../img/toolsIcons/developer/iconHtml.png';
import iconCss from '../img/toolsIcons/developer/iconCss.png';
import iconNode from '../img/toolsIcons/developer/iconNode.png';
import iconTomcat from '../img/toolsIcons/developer/iconTomcat.png';
import iconPayara from '../img/toolsIcons/developer/iconPayara.png';
//Img design
import iconAdobeXd from '../img/toolsIcons/designTools/iconAdobeXd.png';
import iconFigma from '../img/toolsIcons/designTools/iconFigma.png';
import iconIllustrator from '../img/toolsIcons/designTools/iconIllustrator.png';
import iconIndesign from '../img/toolsIcons/designTools/iconIndesign.png';
import iconPhotoshop from '../img/toolsIcons/designTools/iconPhotoshop.jpg';
import iconPremiere from '../img/toolsIcons/designTools/iconPremiere.png';
import iconSketch from '../img/toolsIcons/designTools/iconSketch.png';
import iconZeplin from '../img/toolsIcons/designTools/iconZeplin.png';

const ToolsExperience = () => {

    const toolsExperience = {
        developer: [
            {
                name: "Html",
                percentage: 90,
                img: iconHtml
            },
            {
                name: "JS",
                percentage: 81,
                img: iconJs
            },
            {
                name: "Css",
                percentage: 70,
                img: iconCss
            },
            {
                name: "Sass",
                percentage: 70,
                img: iconSass
            },
            {
                name: "Bootstrap",
                percentage: 80,
                img: iconBootstrap
            },
            {
                name: "React",
                percentage: 85,
                img: iconReact
            },
            {
                name: "Java",
                percentage: 40,
                img: iconJava
            },
            {
                name: "Oracle",
                percentage: 60,
                img: iconOracle
            },
            {
                name: "Postgre",
                percentage: 60,
                img: iconPostgre
            },
            {
                name: "Node",
                percentage: 30,
                img: iconNode
            },
            {
                name: "Tomcat",
                percentage: 40,
                img: iconTomcat
            },
            {
                name: "Payara",
                percentage: 40,
                img: iconPayara
            }
        ],
        design: [
            {
                name: "AdobeXd",
                percentage: 90,
                img: iconAdobeXd
            },
            {
                name: "Illustrator",
                percentage: 90,
                img: iconIllustrator
            },
            {
                name: "Indesign",
                percentage: 70,
                img: iconIndesign
            },
            {
                name: "Photoshop",
                percentage: 70,
                img: iconPhotoshop
            },
            {
                name: "Premiere",
                percentage: 45,
                img: iconPremiere
            },
            {
                name: "Figma",
                percentage: 60,
                img: iconFigma
            },
            {
                name: "Sketch",
                percentage: 60,
                img: iconSketch
            },
            {
                name: "Zeplin",
                percentage: 60,
                img: iconZeplin
            }
        ]
    };

    const colorPercentage = (percentage) => {
        if (percentage <= 20) {
            return "#e68020"
        } else if (percentage <= 40) {
            return "#e6b820"
        } else if (percentage <= 60) {
            return "#e3e620"
        } else if (percentage <= 80) {
            return "#b8e620"
        } else {
            return "#11af26"
        }
    }

    return (
        <div className="ToolsExperience maxScreenSize">
            <p className="sectionTitle">Developer tools</p>
            <div className="row">
                {toolsExperience.developer.map((tool, index) =>
                    <div className="toolContainer" key={index}>
                        <div className="circle">
                            <svg viewBox="0 0 36 36" className="circular-chart">
                                <path className="circle"
                                    strokeDasharray={`${tool.percentage},100`}
                                    d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                    stroke={colorPercentage(tool.percentage)} />
                            </svg>
                        </div>
                        <img src={tool.img} alt={tool.name} />
                    </div>
                )}
            </div>
            <p className="sectionTitle">Design tools</p>
            <div className="row">
                {toolsExperience.design.map((tool, index) =>
                    <div className="toolContainer" key={index}>
                        <div className="circle">
                            <svg viewBox="0 0 36 36" className="circular-chart">
                                <path className="circle"
                                    strokeDasharray={`${tool.percentage},100`}
                                    d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                    stroke={colorPercentage(tool.percentage)} />
                            </svg>
                        </div>
                        <img src={tool.img} alt={tool.name} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ToolsExperience;