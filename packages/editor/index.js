const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  // 创建浏览器窗口
  win = new BrowserWindow({ width: 800, height: 600 });

  // 然后加载应用的 index.html。
  win.loadFile('./dist/index.html');

  ipcMain.on('button-click', () => {
    console.log('received');
  });
}

app.on('ready', createWindow);
