import React from 'react';
import './ProjectCard.scss';
//Icons
import Icons from '../Icons/Icons';

const ProjectCard = ({ tecnologies, title, description, img, gitHubLink, projectLink }) => {

    //Open link in new window
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <div className="ProjectCard col-12">
            <div className="row titleAndtecno">
                <div className="col-12 col-lg-4 sectionTitle">{title}</div>
                <div className="col-12 col-lg-8 colLogos">
                    {tecnologies.map((tec, indexTec) => <img key={indexTec} className="imgLogo" src={tec} alt={`${tec}`} />)}
                </div>
            </div>
            <div className="row photoAndDescription">
                <div className="col-12 col-sm-4 photo" style={{ backgroundImage: `url(${img})` }}></div>
                <div className="col-12 col-sm-8 text">
                    <div className="row description">
                        <p className="darkBlue bold">ProjectDescription</p>
                    </div>
                    <div className="row">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <hr className="hr" />
            <div className="row links">
                {gitHubLink !== undefined &&
                    <div className="col-12 col-sm-6 eachLink" onClick={() => openInNewTab(gitHubLink)}>
                        <span>{Icons.iconGitHub}</span>
                        <p className="darkBlue bold">ProjectRepository</p>
                    </div>
                }
                <div className="col-12 col-sm-6 eachLink" onClick={() => openInNewTab(projectLink)}>
                    <span>{Icons.iconShowProject}</span>
                    <p className="darkBlue bold">ProjectLink</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;