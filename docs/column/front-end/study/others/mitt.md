# Vue3 mitt 组件通信 - 附完整示例

>mitt：事件总线，是第三方插件。
> <br/>Vue2.x 使用 EventBus 进行组件通信，而 Vue3.x 中EventBus被弃用了，因此推荐使用 mitt.js。

## 1. 准备工作

### 1.1 安装依赖包

```xml
npm install mitt --save
```

### 1.2 示例版本

```xml
"mitt": "^2.1.0"
```

## 2. 使用步骤

### 2.1 在公共文件（utils）新建mitt.ts文件，简单封装下' mitt '

```javascript
import mitt from 'mitt'
 
const emitter = new mitt()
export default emitter

// typescript
type Events = {
  event: void;
  [params: string]: any;
};
const emitter = mitt<Events>();
export default emitter;

```

### 2.2 使用

#### 2.2.1 派发页面

```javascript
import emitter from '../utils/mitt'

// 派发
emitter.emit('on-button-click', true);

```

#### 2.2.2 监听页面

```javascript
import emitter from '../utils/mitt';
function onFoo(e) {
  ......
  // 事件处理
}
emitter.on('on-button-click', onFoo);

```

#### 2.2.3 最好离开页面移除监听

>离开页面时调用

```javascript
// 关闭指定的监听
emitter.off("xxx");
```

>清除所有的事件写法

```javascript
emitter.all.clear()

```