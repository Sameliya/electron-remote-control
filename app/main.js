const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('path')

let win = null
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js'),
    },
  });

  const urlLocation = 'http://localhost:3000/main';

  win.loadURL(urlLocation);
};

ipcMain.handle('login',()=>{
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve(Math.floor(Math.random()* 1000000))
    },3000)
  })
})

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
