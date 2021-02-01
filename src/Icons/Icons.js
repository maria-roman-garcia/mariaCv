import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faDesktop, faMapMarkerAlt, faBook, faFilm, faPlaneDeparture, faHiking, faPalette, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub, faPagelines} from '@fortawesome/free-brands-svg-icons';

// ICONS
const iconEmail = <FontAwesomeIcon icon={faAt} color ='#4D7298' size='1x'/>
const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} color='#4D7298' size='1x' />
const iconGitHub = <FontAwesomeIcon icon={faGithub} color='#4D7298' size='1x' />
const iconShowProject = <FontAwesomeIcon icon={faDesktop} color='#4D7298' size='1x' />
const iconCheckCircle = <FontAwesomeIcon icon={faCheckCircle} color='#4D7298' size='1x' />
const iconMap = <FontAwesomeIcon icon={faMapMarkerAlt} color='#4D7298' size='1x' />
const iconNature = <FontAwesomeIcon icon={faPagelines} color='white' size='1x' />
const iconHiking = <FontAwesomeIcon icon={faHiking} color='white' size='1x' />
const iconBook = <FontAwesomeIcon icon={faBook} color='white' size='1x' />
const iconFilm = <FontAwesomeIcon icon={faFilm} color='white' size='1x' />
const iconTravel = <FontAwesomeIcon icon={faPlaneDeparture} color='white' size='1x' />
const iconArt = <FontAwesomeIcon icon={faPalette} color='white' size='1x' />
const iconMobile = <FontAwesomeIcon icon={faMobileAlt} color='#4D7298' size='1x' />

export default {
    iconEmail,
    iconLinkedin,
    iconGitHub,
    iconShowProject,
    iconCheckCircle,
    iconMap,
    iconNature,
    iconBook,
    iconFilm,
    iconTravel,
    iconHiking,
    iconArt,
    iconMobile
}





