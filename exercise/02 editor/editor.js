const { Menu, dialog } = require('electron').remote
const fs = require('fs')

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        click: function () {
          dialog.showOpenDialog(
            function (filePaths) {
              if (filePaths === undefined) {
                console.log('No file selected')
                return
              }
              console.log('fileName=' + filePaths)

              var filePathBox = document.getElementById('filePath') = filePaths
              filePathBox.innerText = filePaths
              fs.readFile(filePaths.toString(), 'utf8', function (err, data) {
                if (err) window.alert('read fail!')
                var text = document.getElementById('text')
                text.value = data
              })
            }
          )
        }
      },
      {
        label: 'Save',
        accelerator: 'CmdOrCtrl+S',
        click: function () {
          var filePathBox = document.getElementById('filePath').innerText
          if (filePathBox.trim().length === 0) window.alert('No file loaded!')
          var text = document.getElementById('text')
          fs.writeFile(filePathBox, text.value)
        }
      },
      {
        label: 'Open new file',
        accelerator: 'CmdOrCtrl+N',
        click: function () {
          var filePathBox = document.getElementById('filePath')
          //  .innerText
          console.log('filePathBox = ' + filePathBox)
          filePathBox.innerText = "*.txt"
          console.log('filePathBox(After) = ' + filePathBox)
          var text = document.getElementById('text')
          text.value = null
        }
      },
      // {
      //   label: 'Close',
      //   accelerator: 'CmdOrCtrl+W',
      //   click: function () {

      //   }
      // },
      {
        label: "Save file as",
        accelerator: 'CmdOrCtrl+Shift+S',
        click: function () {
          var filePathBox = document.getElementById('filePath').innerText
          if (filePathBox.trim().length === 0) window.alert('No file loaded!')
          var text = document.getElementById('text')
          dialog.showSaveDialog(
            { filters: [{name : 'file', extensions : ['*']},{ name : 'text', extensions : ['txt'] }, { name : 'markdown', extensions : ['md']}] },
            function (filePaths) {
              fs.writeFile(filePaths.toString(), text.value, function (err) {
                if (err) window.alert('save as ... fail!')
                console.log('file have saved.')
              })
            }
          )
        }

      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  },
  {
    role: 'help',
    submenu: [{ label: 'Learn More' }]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
