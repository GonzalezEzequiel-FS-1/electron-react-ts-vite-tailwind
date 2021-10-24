const electron = require('electron');
const {ipcMain} = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');
let mainWindow;

console.log(app.getAppPath())
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 680, 
    minHeight:300,
    minWidth: 400,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    //mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('on-close', () => {
  app.quit()
})
ipcMain.on('on-minimize', () => {
  mainWindow.minimize()
})
ipcMain.on('on-maximize', () => {
  if(!mainWindow.isMaximized()) mainWindow.maximize(); 
  else {mainWindow.unmaximize()} 
})
ipcMain.on('is-FullScreen', (event) => {
  mainWindow.fullScreen ? event.returnValue = true : event.returnValue = false ;
})
ipcMain.on('put-on-focus', () => {
  app.focus();
})


app.setAppUserModelId('XChat')

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});