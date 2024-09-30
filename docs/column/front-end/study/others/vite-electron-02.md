# Vite+Vue3+Electron 快速构建一个桌面应用（二）

## 一. 思路

先说结论，可利用electron中的`mainWindow.loadURL(<your-url>)`来实现。

对于动态模块热重载功能来说，无论是`webpack`还是`vite`，其都是将构建内容存入内存，因此我们无法使用`mainWindow.loadFile('dist/index.html')`样加载文件的方式。

但是，单纯地改变该配置也是不行的，需要使用vite将开发服务器运行起来，可以正常运行动态模块热重载，而electron直接加载其开发服务器可访问的url，即`http://localhost:3000`。

## 二. 实现步骤

### 1. 编辑main.js

将`mainWindow.loadFile('dist/index.html')`更新为`mainWindow.loadURL("http://localhost:3000")`，更新后的文件如下所示：

``` Javascript
// main.js

// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 加载 index.html
  // mainWindow.loadFile('dist/index.html') 将该行改为下面这一行，加载url
  mainWindow.loadURL("http://localhost:3000")

  // 打开开发工具
  // mainWindow.webContents.openDevTools()
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// 在这个文件中，你可以包含应用程序剩余的所有部分的代码，
// 也可以拆分成几个文件，然后用 require 导入。
```

### 2. 编辑vite.config.js
修改文件vite.config.js的base，修改后的文件如下所示：

``` Javascript
// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",	// 新增
  plugins: [vue()]
})
```

### 3. 同时开启vite和electron服务
为了使vite和electron正常运行，需要先运行vite，使得其开发服务器的url可以正常访问，然后再开启electron去加载url。

此处需要安装两个库：

concurrently：阻塞运行多个命令
<br/>首先来安装：

``` PowerShell
yarn add -D concurrently
```
接着更新文件package.json，scripts新增两条命令：

``` Javascript
"scripts": {
    "electron:serve": "concurrently vite \"electron .\"",
  },
```

更新后完整内容如下：

``` Javascript
{
  "name": "kuari",
  "version": "0.0.0",
  "main": "main.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "electron:serve": "concurrently vite \"electron .\"",
  },
  "dependencies": {
    "vue": "^3.2.16"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^1.9.3",
    "concurrently": "^6.3.0",
    "cross-env": "^7.0.3",
    "electron": "^15.1.2",
    "vite": "^2.6.4",
  }
}
```

## 三. 运行

`yarn electron:serve`为阻塞执行开发服务器运行和`yarn electron`命令
运行项目只要执行命令`yarn electron:serve`即可，当修改项目文件时，桌面应用也将自动更新。