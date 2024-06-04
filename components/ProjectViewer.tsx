import React from 'react'
import "./ProjectViewer.scss"

import reactLogo from "../resources/react_logo.png"
import goLogo from "../resources/go_logo.png"
import sassLogo from "../resources/sass_logo.png"
import javaLogo from "../resources/java_logo.webp"
import springLogo from "../resources/spring_logo.svg"
import mySqlLogo from "../resources/mysql_logo.png"
import redisLogo from "../resources/redis_logo.svg"
import arduinoLogo from "../resources/arduino_logo.png"
import cLogo from "../resources/c_logo.png"
import platformioLogo from "../resources/platformio_logo.png"
import bootstrapLogo from "../resources/bootstrap_logo.png"
import telegramLogo from "../resources/telegram_logo.png"
import inkscapeLogo from "../resources/inkscape_logo.png"


export const ProjectViewer: React.FC<{
    header : string,
    text : string,
    color : string,
    image : string | null,
    video : string | null,
    tech_stack : string[]
}> = ({
    header,
    text, 
    color,
    image,
    video,
    tech_stack
}) => {

    function RenderVideo (video) {
        if (video != null) {
            return (
            <div id="vid_div">
                <iframe src={video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; full-screen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            )
        } else {
            return null;
        }
    }

    function RenderTechStack (tech_stack) {
        var logos : React.JSX.Element[] = [];
        for (var i in tech_stack){
            if (tech_stack[i] == "react") {
                logos.push(<img src={reactLogo} title='ReactJS'></img>)
            }
            if (tech_stack[i] == "go") {
                logos.push(<img src={goLogo} title='Golang'></img>)
            }
            if(tech_stack[i] == "sass") {
                logos.push(<img src={sassLogo} title='Sass'></img>)
            }
            if (tech_stack[i] == "java") {
                logos.push(<img src={javaLogo} title='Java'></img>)
            }
            if(tech_stack[i] == "spring") {
                logos.push(<img src={springLogo} title='Spring'></img>)
            }
            if (tech_stack[i] == "mysql") {
                logos.push(<img src={mySqlLogo} title='MySQL'></img>)
            }
            if(tech_stack[i] == "redis") {
                logos.push(<img src={redisLogo} title='Redis'></img>)
            }
            if(tech_stack[i] == "bootstrap") {
                logos.push(<img src={bootstrapLogo} title='Bootstrap'></img>)
            }
            if(tech_stack[i] == "arduino") {
                logos.push(<img src={arduinoLogo} title='Arduino'></img>)
            }
            if(tech_stack[i] == "c") {
                logos.push(<img src={cLogo} title='C Language'></img>)
            }
            if(tech_stack[i] == "platformio") {
                logos.push(<img src={platformioLogo} title='Platform.io'></img>)
            }
            if(tech_stack[i] == "telegram") {
                logos.push(<img src={telegramLogo} title='Telegram API'></img>)
            }
            if(tech_stack[i] == "inkscape") {
                logos.push(<img src={inkscapeLogo} title='Inkscape'></img>)
            }
        }
        return logos
    }

    return (
        <div id="project_viewer" style={{backgroundColor: color}}>
            <div id="header_div">
                <h2>{header}</h2>
            </div>
            <div id="content_div">
                {RenderVideo(video)}
                <div id="info_div">
                    <div id="proj_desc">
                        <p>{text}</p>
                    </div>
                    <div id="tech_stack">
                        {RenderTechStack(tech_stack)}
                    </div>
                    <div id="link_div">

                    </div>
                </div>
            </div>
        </div>
    );
}

