import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import { ProjectViewer } from "./ProjectViewer";
import { InfoTab } from "./InfoTab";

export const Main: React.FC <{

}> = ({

}) => {
    return (
        <main>
        <InfoTab />
            <ProjectViewer color={"#BFA8BF"}
            header = {"W1NC3NT"}
            text = {"Fleißiger Chat-Bot-Dienstbote! Er kann Finanzen tracken."}
            image = {'../resources/w1nc3nt.png'}
            >
                <div id="title_img" style={{backgroundImage: 'url("../resources/w1nc3nt.png") linear-gradient(to left, black, transparent)' }}></div>
            </ProjectViewer>
            <ProjectViewer color={"#53ed50"}
            header = {"Java Full-Stack App"}
            text = {"Service"}
            image = {null} />
            <ProjectViewer color={"#5a57ed"}
            header = {"Arduino Projects"}
            text = {"Lots of Stuff"} 
            image = {null} video = {"https://www.youtube.com/embed/MHeMFTgxyAI?si=40-eLAD5wNzCwZg2"}/>
            <ProjectViewer color={"#d6d6d6"}
            header = {"This Site"}
            text = {"You guess it"} 
            image = {null} 
            tech_stack={["react"]}/>
        </main>
    )
}