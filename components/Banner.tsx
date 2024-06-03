import React from "react";
import "./Banner.scss";
import {Signature} from "./Signature.tsx"

import backImg from "../resources/avatar.jpg"

export const Banner: React.FC <{

}> = ({

}) => {


    return (        
        <>
        <Signature />
        <div id="banner" >
            <div id="background"></div>
            <div id="gradient"></div>
        </div>
        </>
    )
}