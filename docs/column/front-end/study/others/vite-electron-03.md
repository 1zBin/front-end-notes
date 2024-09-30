# Vite+Vue3+Electron 快速构建一个桌面应用（三）

## 一. 思路

先说结论，重点还是在于`mainWindow.loadURL()`。
<br/>
打包后还是加载`http://localhost:3000`是无法运行的，因此，此处需要先用`vite`打包好，然后使用`electron-builder`加载`vite`打包后的文件进行打包。
<br/>
为了代码能够根据不同环境在运行时加载`http://localhost:3000`，在打包时加载文件，此处需要使用环境变量来切换生产和开发环境。

## 二. 实现

### 1. 环境变量
此处使用环境变量NODE_ENV来切换生产和开发环境，生产环境为NODE_ENV=production，开发环境为NODE_ENV=development，若有其它如release等环境可在此基础上拓展。

### 2. 创建electron文件夹
在项目根目录下创建文件夹electron，将main.js和preload.js文件移动进来。其结构如下所示：

```
.
├── README.md
├── electron
│   ├── main.js
│   └── preload.js
...
```
若还是不太明白可以看看源码中文件结构。

### 3. 编辑electron/main.js
该文件主要是需要根据环境变量切换electron加载的内容，修改内容如下：

``` Javascript
mainWindow.loadURL(
  NODE_ENV === 'development'
  ? 'http://localhost:3000'
  :`file://${path.join(__dirname, '../dist/index.html')}`
);
```

修改后的完整内容如下：

``` Javascript
// electron/main.js

// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow } = require('electron')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV

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
  mainWindow.loadURL(
    NODE_ENV === 'development'
      ? 'http://localhost:3000'
      :`file://${path.join(__dirname, '../dist/index.html')}`
  );

  // 打开开发工具
  if (NODE_ENV === "development") {
    mainWindow.webContents.openDevTools()
  }

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

### 4. 编辑package.json
首先修改main 属性，将main: main.js改为main: electron/main.js。
``` Javascript
{
  "name": "kuari",
  "version": "0.0.0",
  "main": "electron/main.js",
  // ... 
}
```
接着，编辑build属性：
``` Javascript
"build": {
  "appId": "com.your-website.your-app",
  "productName": "ElectronApp",
  "copyright": "Copyright © 2021 <your-name>",
  "mac": {
    "category": "public.app-category.utilities"
  },
  "nsis": {
    "oneClick": false,
    "allowToChangeInstallationDirectory": true
  },
  "files": [
    "dist/**/*",
    "electron/**/*"
  ],
  "directories": {
    "buildResources": "assets",
    "output": "dist_electron"
  }
}
```
然后，更新scripts属性。
<br/>
<br/>
此处需要先安装两个库：

>`cross-env`: 该库让开发者只需要注重环境变量的设置，而无需担心平台设置

>`electron-builder`: electron打包库
```
yarn add -D cross-env electron-builder
```

更新后的scripts如下：

``` Javascript
{
  "dev": "vite",
  "build": "vite build",
  "serve": "vite preview",
  "electron": "wait-on tcp:3000 && cross-env NODE_ENV=development electron .", // 此处需要设置环境变量以保证开发时加载url
  "electron:serve": "concurrently -k \"yarn dev\" \"yarn electron\"",
  "electron:build": "vite build && electron-builder" // 新增打包命令
}
```
最后，更新后的package.json完整内容如下：
``` Javascript
{
  "name": "kuari",
  "version": "0.0.0",
  "main": "electron/main.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview",
    "electron:serve": "cross-env NODE_ENV=development concurrently vite \"electron .\"",
    "electron:build": "vite build && electron-builder"
  },
  "dependencies": {
    "vue": "^3.2.16"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^1.9.3",
    "concurrently": "^6.3.0",
    "cross-env": "^7.0.3",
    "electron": "^15.1.2",
    "electron-builder": "^22.13.1",
    "vite": "^2.6.4",
  },
  "build": {
    "appId": "com.my-website.my-app",
    "productName": "MyApp",
    "copyright": "Copyright © 2021 kuari",
    "mac": {
      "category": "public.app-category.utilities"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true
    },
    "files": [
      "dist/**/*",
      "electron/**/*"
    ],
    "directories": {
      "buildResources": "assets",
      "output": "dist_electron"
    }
  }
}
```

## 三. 打包

直接执行打包命令即可开始打包。

``` PowerShell
yarn electron:build
```

打包完成之后，会多出两个文件夹dist和dist_electron，其文件结构如下：

```
.
├── README.md
├── dist
│   ├── assets
│   ├── favicon.ico
│   └── index.html
├── dist_electron
│   ├── MyApp-0.0.0-mac.zip
│   ├── MyApp-0.0.0-mac.zip.blockmap
│   ├── MyApp-0.0.0.dmg
│   ├── MyApp-0.0.0.dmg.blockmap
│   ├── builder-debug.yml
│   ├── builder-effective-config.yaml
│   └── mac
...

```

至此，便完成了打包。
<br/>
后面再来写写关于electron的优化，减少electron打包后应用的体积。