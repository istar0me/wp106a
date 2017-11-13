const {app, BrowserWindow} = require('electron')
// 新版寫法，相等於
// const electron = require('electron')
// const app = electron.app
// const BrowserWindows = electron.BrowserWindow

function createWindow () {
  var win = new BrowserWindow({width: 800, height: 600})
  win.loadURL('file://' + __dirname + '/index.html')
}

app.on('ready', createWindow)