const {contextBridge, ipcRenderer} = require('electron');
const onClose = () => ipcRenderer.send('on-close');
const onMinimize = () => ipcRenderer.send('on-minimize');
const onMaximize = () => ipcRenderer.send('on-maximize');
const isFullScreen = () => ipcRenderer.sendSync('is-FullScreen')
const focusApp = () => ipcRenderer.send('put-on-focus');
contextBridge.exposeInMainWorld('handler', {onClose, onMinimize, onMaximize, isFullScreen, focusApp});
