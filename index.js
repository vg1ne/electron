const {app, BrowserWindow} = require('electron');
const path = require('path');
let mainWindow;

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        show: false,
        width: 400,
        height: 400
    });
    mainWindow.loadURL(path.join('file://', __dirname, 'index.html'))
    mainWindow.on('ready-to-show', ()=> {
        mainWindow.show();
    })
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
})