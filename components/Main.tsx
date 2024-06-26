import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import { ProjectViewer } from "./ProjectViewer";
import { InfoTab } from "./InfoTab";

import ukrFlag from "../resources/ukr_flag.png"
import deFlag from "../resources/de_flag.png"

export const Main: React.FC <{

}> = ({

}) => {
    return (
        <main>
            <InfoTab text={<p>Hallo!<br />
                            Ich bin Andrii Roshkovan, Backend und Embedded Entwickler.<br />
                            Ich komme aus der Ukraine<img src={ukrFlag}></img>,
                            jedoch jetzt bin ich in Deutschland <img src={deFlag}></img> 
                            tätig, nähmlich in Merseburg, Sachsen-Anhalt.<br />
                            Unten sind manche von meinen Programmierungsprojekten!
                            </p>} />

            <ProjectViewer color={["#BFA8BF", "#ffffc4"]}
            header = {"W1NC3NT"}
            text = {"Fleißiger Chat-Bot-Dienstbote! Er kann Finanzen tracken."}
            image = {'../resources/w1nc3nt.png'}
            video={null}
            tech_stack = {["java", "spring", "telegram", "mysql", "redis", "railway"]}
            github={"https://github.com/andrews-quest/w1nc3nt"}>
                <div id="title_img" style={{backgroundImage: 'url("../resources/w1nc3nt.png") linear-gradient(to left, black, transparent)' }}></div>
            </ProjectViewer>

            <ProjectViewer color={["#53ed50", "#ffff59"]}
            header = {"Flaming Wheels Expeditioning"}
            text = {"Eine Adminseite von einer ausgedachten Beförderungsfirma, die ich für Traing erzeugt hat."}
            video= {null}
            image = {"../resources/flaming_wheels.svg"} 
            tech_stack={["java", "spring", "bootstrap"]}
            github={"https://github.com/andrews-quest/flaming-wheels-spring-fullstack"}/>

            <ProjectViewer color={["#5a57ed", "#c9c8f7"]}
            header = {"Arduino Projects"}
            text = {"Lots of Stuff"} 
            image = {null} video = {"https://www.youtube.com/embed/MHeMFTgxyAI?si=40-eLAD5wNzCwZg2"}
            tech_stack={["arduino", "platformio", "c"]}
            github={""}/>
            
            <ProjectViewer color={["#d6d6d6", "#fffcc4"]}
            header = {"This Site"}
            text = {"You guess it"} 
            image = {null} 
            video={null}
            tech_stack={["go", "react", "ts", "esbuild", "sass", "inkscape", "railway"]}
            github={"https://github.com/andrews-quest/portfolio-website"}/>

            <ProjectViewer color={["#f8ff47", "#4b194f"]}
            header = {"PyTorch Snake Reinforcement"}
            text = {"Ein Neuronales Netzwerk, das lernt, das klassische Spiel zu spielen."} 
            image = {null} 
            video={"https://www.youtube.com/embed/cPfVUUn-rmw?si=OLgM7sVgbJMCLZrF"}
            tech_stack={["python", "pytorch", "cuda", "pygame"]}
            github={"https://github.com/andrews-quest/snake-game-reinforcement-learning"}/>
        </main>
    )
}