# Vue3+Live2d+Electron 开发桌面宠物应用程式

## 1. 安装依赖

结合上一篇文章，在vue3+live2d的基础上再加入electron的配置，参考：<br/>
[Vite+Vue3+Electron 快速构建一个桌面应用（一）](./vite-electron-01)

## 2. 参考代码

https://github.com/1zBin/smart-table-pets/tree/main

## 3. 目录说明

(1)根目录下electron目录下的`main.js`&`preload.js`文件用于配置运行/打包桌面应用的展示效果

(2)根目录下public的library用于存放live2d相关的离线依赖包，html入口文件引入；而model则用于存放离线live2d模型，一般只调用`model.json`后缀的模型文件

(3)根目录下src里面的App.vue用来引入模型，以及模型的一些代码逻辑

其中使用了model.on("hit", (hitAreas) => {})来处理点击模型后的动作逻辑，例如我代码里面使用随机数来匹配model/motions里面tapBody的动作效果。

另外，模型的sounds方面，我是另外生成了普通话语音替换了原来的语音，文本生成语音链接：https://www.text-to-speech.cn/。

setupModelInteractions函数是用来节流的，以防用户高频点击模型一直更换动作和语音，在动作结束前不能再执行下一个动作。

## 4. 其他

后续考虑加入AI对话功能，有待开发...