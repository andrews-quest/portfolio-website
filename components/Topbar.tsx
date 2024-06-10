import React from "react";
import "./Topbar.scss";
import gitHubLogo from "../resources/github_logo.png";
import linkedInLogo from "../resources/linkedin_logo.png";

export const Topbar: React.FC <{

}> = ({

}) => {
    return( 
        <div id="topbar">
            <div id="topbar_gradient"></div>
            <div id="buttons">
                <a href="https://github.com/andrews-quest" target="_blank">
                    <div id="button">
                        <img src={gitHubLogo}></img> GitHub
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/andrii-roshkovan/" target="_blank">
                    <div id="button">
                        <img src={linkedInLogo}></img> LinkedIn 
                    </div>
                </a>
            </div>
        </div>
    )
}