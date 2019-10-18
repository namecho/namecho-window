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
        frame: false,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    // 加载页面
    win.loadFile('./dist/index.html')

    // 打开调试工具
    // win.webContents.openDevTools()
}

// 第一次创建窗口
app.on('ready', createWindow)

ipcMain.on('minimize', e => win.minimize());
ipcMain.on('maximize', e => win.maximize());
ipcMain.on('restore', e => win.unmaximize());
ipcMain.on('close', e => win.close());