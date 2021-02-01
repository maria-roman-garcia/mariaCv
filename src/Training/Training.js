import React from 'react';
import './Training.scss';
//Icons
import Icons from '../Icons/Icons';

const Training = () => {

    const trainingArray = [
        {
            title: "Scrum Master Certification",
            date: "2020",
            place: "EIGP"
        },
        {
            title: "Front-end developer training",
            date: "2019-2020",
            place: "Wild Code School"
        },
        {
            title: "Certificate in HTML and CSS",
            date: "2019",
            place: "Universitat Oberta de Catalunya"
        },
        {
            title: "MA. Digital Graphic Design",
            date: "2018-2019",
            place: "Internacional University of La Rioja"
        },
        {
            title: "BA. fine arts",
            date: "2013-2017",
            place: "Complutense University of Madrid"
        }
    ]
    return (
        <div className="Training maxScreenSize">
            <div className="columnCenter">
                <div>
                    <p className="sectionTitle">Training</p>
                    {trainingArray.map((e, index) =>
                        <div className="row alignCenter trainingContainer" key={index}>
                            <p className="date">{e.date}</p>
                            <div className="trainingBox">
                                <p className="darkBlue bold">{e.title}</p>
                                <p><span className="mapIcon">{Icons.iconMap}</span>{e.place}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Training;