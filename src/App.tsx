import { useState, useEffect } from 'react';
import './default.css'

declare global {
  interface Window{handler:any}
}

function App() {

  const { onClose, onMinimize, onMaximize, isFullScreen } = window.handler;
  const [FullScreen, setFullScreen] = useState(false);

  useEffect(()=> {
    setFullScreen(isFullScreen())
  },[])
  window.addEventListener('resize', () => {setFullScreen(isFullScreen())})

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
