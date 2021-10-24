import { useState, useEffect } from 'react';
import './default.css'



function App() {

  const { onClose, onMinimize, onMaximize, isFullScreen } = window.handler;
  const [FullScreen, setFullScreen] = useState(false)
    window.addEventListener('resize', () => {setFullScreen(isFullScreen())})

  console.log(FullScreen)
  const titleBar = () => {
    if (!FullScreen) {
      return <div id="title-bar">
        <div id="title">Title</div>
        <div id="title-bar-btns">
          <button id="min-btn" onClick={() => { onMinimize() }}></button>
          <button id="max-btn" onClick={() => { onMaximize() }}></button>
          <button id="close-btn" onClick={() => { onClose() }}></button>
        </div>
      </div>
    } else { return <></> }
  }
  return (<>
    {titleBar()}
    <div id="content">
      Here You can write HERE your content
    </div>
  </>)
}

export default App
