const { app, BrowserWindow, ipcMain } = require('electron')

app.on('ready', ()=>{ // 准备好 electron
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true     // 使用 node API
        }
    })
    mainWindow.loadFile('index.html')
    ipcMain.on('message', (event, arg) => {
        mainWindow.send('reply', 'wolrd')
    })
})          