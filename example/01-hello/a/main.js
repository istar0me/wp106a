<<<<<<< HEAD
const {app, BrowserWindow} = require('electron')
// 新版寫法，相等於
// const electron = require('electron')
// const app = electron.app
// const BrowserWindows = electron.BrowserWindow
||||||| merged common ancestors
const {app, BrowserWindow} = require('electron')
=======
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
// const {app, BrowserWindow} = require('electron')
>>>>>>> dcdb32b030711fb03bb5e29ee1b60d911a6e7f66

function createWindow () {
  var win = new BrowserWindow({width: 800, height: 600})
  win.loadURL('file://' + __dirname + '/index.html')
}

app.on('ready', createWindow)
