import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";


export default function socialMedia(){
    return(
        <div className="social-container">
            {/* <h3>Bla bla bla</h3> */}

            <a href="https://discord.com/channels/Zara#6932"
            className="discord social"
            >
              <FontAwesomeIcon icon={faDiscord} size="2x"/>  
            </a>
            <a href="https://github.com/ZaraBaghdasaryan"
            className="gitHub social"
            >
              <FontAwesomeIcon icon={faGithub} size="2x"/>  
            </a>
            <a href="https://www.linkedin.com/in/zara-baghdasaryan-269062b3/"
            className="linkedIn social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>  
            </a>

        </div>
    );
}
