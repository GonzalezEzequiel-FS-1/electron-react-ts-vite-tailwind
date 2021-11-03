import { useState, useEffect } from 'react';
import pkg from '../package.json'
import { IoMoon, IoSunny } from 'react-icons/io5';
import {BsMoonStarsFill, BsSunFill} from 'react-icons/bs'
import {VscChromeMaximize} from 'react-icons/vsc'
import './default.css';
import "./lightmode.css"


declare global {
  interface Window{handler:any}
}


function App() {
  const { onClose, onMinimize, onMaximize, isFullScreen } = window.handler;
  const [FullScreen, setFullScreen] = useState(false);
  const [isLight, setIsLight] = useState(false)

  useEffect(()=> {
    setFullScreen(isFullScreen())
  },[])

  window.addEventListener('resize', () => {setFullScreen(isFullScreen())})
  const handleLight = () => {
  console.log(isLight)
  setIsLight(!isLight)
  }
  const fs = () => {
    return FullScreen ? "contentFS" : "content" 
  }
  const light = () => {
    return isLight ? "light" : ""
  }
  
  const titleBar = () => {
    if (!FullScreen){
      return <div id="title-bar" className={light()+'bar'}>
        <div id="title" className={light()+'bar'}>{pkg.build.productName}</div>
        <div id="title-bar-btns">
          <button className="lightbtn" style={isLight ? {color: "black"} : {color: "white"}} onClick={() => {handleLight()}}>
            <span>{!isLight ? <BsSunFill/> : <BsMoonStarsFill/>}</span>
          </button>
          <button id="min-btn" style={isLight ? {color: "black"} : {color: "white"}} onClick={() => { onMinimize() }}><span>-</span></button>
          <button id="max-btn" style={isLight ? {color: "black"} : {color: "white"}} onClick={() => { onMaximize() }}><span id="maximize"><VscChromeMaximize/></span></button>
          <button id="close-btn" style={isLight ? {color: "black"} : {color: "white"}} onClick={() => { onClose() }}><span>&times;</span></button>
        </div>
      </div>
    } else { return <></> }
  }

  return (<div className={light()} id="main">
    {titleBar()}
    <div className={fs() +" "+ light()}>
      Here you can write your content
    </div>
  </div>)
}

export default App
