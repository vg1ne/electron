const {app, Menu} = require('electron');
const isWindows = process.platform === 'win32';
const {showMessage, showSaveDialog, showOpenDialog} = require('./main-dialog')

module.exports = {
    setMainMenu
}

function setMainMenu(mainWindow){
    const template = [
        {
            label: isWindows ? 'File' : app.getName(),
            submenu: [
                {
                    label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
                    accelerator: isWindows ? 'Alt + F4' : 'CmdOrCtrl+Q',
                    click(){
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                {role: 'undo'},
                {role: 'redo'},
                {type: 'separator'},
                {role: 'cut'},
                {role: 'copy'},
                {role: 'paste'},
                {role: 'selectAll'}
            ]
        },
        {
            label: 'Dialog',
            submenu: [
                {
                    label: 'Show Dialog',
                    click(){
                        showMessage(mainWindow)
                    }
                },
                {
                    label: 'Show SaveDialog',
                    click(){
                        showSaveDialog(mainWindow)
                    }
                },
                {"label": 'Show OpenDialog',
                click(){
                    showOpenDialog(mainWindow)
                }}
            ]
        }
    ]
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}