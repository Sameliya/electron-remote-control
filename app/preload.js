const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('ipcRenderer',{
  login: async (setCode)=>{
    const code = await ipcRenderer.invoke('login');
    setCode(code)
  }
})
