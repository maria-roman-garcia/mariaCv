import React, { Fragment, useState } from 'react';
import './AboutMe.scss';
//Img
import meImg from '../img/Me/mariaCarnet2020CirculoTransparente.png';
import CV from '../img/CV/MariaRomanCv2021.pdf';
//Icons
import Icons from '../Icons/Icons';
//Reactstrap
import { Tooltip } from 'reactstrap';

const AboutMe = () => {

    //Open link in new window
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    //Tooltips
    const [tooltips, setToolTips] = useState([
        {
            icon: Icons.iconNature,
            text: "Nature",
            open: false
        },
        {
            icon: Icons.iconHiking,
            text: "Hiking",
            open: false
        },
        {
            icon: Icons.iconBook,
            text: "Read",
            open: false
        },
        {
            icon: Icons.iconFilm,
            text: "Films",
            open: false
        },
        {
            icon: Icons.iconTravel,
            text: "Travel",
            open: false
        },
        {
            icon: Icons.iconArt,
            text: "Art",
            open: false
        }
    ])

    const toggleTooltip=(index)=>{
        const newTooltip = [...tooltips];
        newTooltip[index].open = !newTooltip[index].open;
        setToolTips(newTooltip);
    }

    return (
        <div className="AboutMe maxScreenSize">
            <div className="row alignCenter">
                <div className="col-12 col-lg-4 justifyCenter">
                    <div className="backgroundImg">
                        <img src={meImg} alt="myImg" />
                    </div>
                </div>
                <div className="col-12 col-lg-8 justifyCenter">
                    <div className="aboutMeContainer">
                        <p className="sectionTitle">AboutMe</p>
                        <p className="padding">I am a person who likes to face new challenges and to give my best to achieve the most demanding goals.
                        Software development is my passion. Therefore I am always ready to learn from my teammates and to give my best
                         to help them!</p>
                        <p className="sectionTitle">Interests</p>
                        <div className="row justifyAround padding">
                            {tooltips.map((t, index) =>
                                <div key={index}>
                                    <div className="interestIcon" href="#" id={t.text}>{t.icon}</div>
                                    <Tooltip placement="top" isOpen={t.open} target={t.text} toggle={() => toggleTooltip(index)}>
                                        {t.text}
                                    </Tooltip>
                                </div>
                            )}
                        </div>
                        <div className="socialMedia">
                            <div className="row borderTable justifyCenter">
                                <p className="sectionTitle">Let´s get social</p>
                            </div>
                            <div className="row borderTable padding" style={{ borderTop: 0 }}>
                                <div className="col-12 col-lg-6">
                                    <p><span className="marginRight">{Icons.iconEmail}</span>mromangarcia04@gmail.com</p>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <p><span className="marginRight">{Icons.iconMobile}</span>+34 628 331 390</p>
                                </div>
                                <div className="col-12 col-lg-6" style={{ cursor: "pointer" }}>
                                    <p onClick={() => openInNewTab("https://www.linkedin.com/in/mar%C3%ADarom%C3%A1ngarc%C3%ADa-4587a6184/")}><span className="marginRight">{Icons.iconLinkedin}</span>Linkedin</p>
                                </div>
                                <div className="col-12 col-lg-6" style={{ cursor: "pointer" }}>
                                    <a href={CV} download>
                                        <span className="marginRight">{Icons.iconCv}</span>
                                        <p type="submit">Download CV</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;