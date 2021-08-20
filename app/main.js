const { app, BrowserWindow } = require('electron')
// const path = require('path')

let win = null;

console.log(1);
const createWindow = () => {
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const urlLocation = 'http://localhost:3000';

  win.loadURL(urlLocation);
};

app.on('ready', createWindow);

// 当全部窗口关闭时退出程序
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
