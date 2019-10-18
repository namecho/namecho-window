let {
    app,
    BrowserWindow,
    ipcMain
} = require('electron')

let win = null;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
        }
    })

    // 加载页面
    win.loadFile('../dist/index.html')

    // 打开调试工具
    win.webContents.openDevTools()
}

// 第一次创建窗口
app.on('ready', createWindow)

ipcMain.on('close', e => win.close());