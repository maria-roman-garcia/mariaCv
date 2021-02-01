import React from 'react';
import './TimeLineExperience.scss';
//Icons
import Icons from '../Icons/Icons';

const TimeLineExperience = () => {

    const experiences = [
        {
            id: 1,
            date: " Dic. 2018 - Present",
            companie: "Delonia Software SL.",
            role: "Web development | Graphic Design",
            text: ["Development and layout of the front with React framework, time estimation and scope of the tasks, analysis and development of the database (Oracle and postgreSQL), development of the back with Java 8, generation of queries and connection to the front",
                "Design of Application style-guide, graphic design and screen layout, design of logos, icons and mockups, applications testing and UX/UI study"]
        },
        {
            id: 2,
            date: "Feb. 2020 - May",
            companie: "Intership at La Vanguardia",
            role: "Web development | Graphic Design",
            text: ["Design, development and integration of games section in digital platform"]
        },
        {
            id: 3,
            date: " Mar. 2018 - Jun 2018",
            companie: "Barronkress S.L.",
            role: "Graphic Design",
            text: ["Illustration for catalogues",
                "Layout of documents and presentations"]
        }
    ];

    return (
        <div className="TimeLineExperience maxScreenSize">
            <p className="sectionTitle">TimeLine Experience</p>
            {experiences.map((exp, index) =>
                <div key={index} className={exp.id % 2 === 0 ? "par" : "impar"}>
                    <div className={exp.id % 2 === 0 ? "row justifyEnd" : "row justifyStart"}>
                        <p className="paddingTexto bold darkBlue">{exp.role}</p>
                    </div>
                    <div className={exp.id % 2 === 0 ? "row justifyEnd" : "row justifyStart"}>
                        <p className="paddingTexto darkBlue">{exp.companie} [{exp.date}]</p>
                    </div>
                    {exp.text.map((item, indexItem) =>
                        <div key={indexItem} className={exp.id % 2 === 0 ? "row justifyEnd paddingTexto alignCenter noWrapText" : "row justifyStart paddingTexto alignCenter noWrapText"}>
                            <span className="paddingIcon">{Icons.iconCheckCircle}</span>
                            <p>{item}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default TimeLineExperience;