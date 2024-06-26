import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Topbar } from './Topbar'
import { Banner } from './Banner'
import { Main } from './Main'
import "./App.scss"


function App() {


    
    return (

    <>
        <div id="img_parallax"></div>
        <Topbar />
        <Banner />
        <Main />
    </>
    )
}

const domContainer = document.getElementById("root")!;
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);