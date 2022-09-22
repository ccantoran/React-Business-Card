import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faSquareFacebook, faSquareInstagram, faSquareGithub, } from "@fortawesome/free-brands-svg-icons"


export default function Footer(){
    return (
        <footer>
            <ul>
                <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></li>
                <li><FontAwesomeIcon icon={faSquareFacebook}></ FontAwesomeIcon></li>
                <li><FontAwesomeIcon icon={faSquareInstagram}></ FontAwesomeIcon></li>
                <li><FontAwesomeIcon icon={faSquareGithub}></ FontAwesomeIcon></li>   
            </ul>
        </footer>
    )
}