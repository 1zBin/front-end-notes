# JS实现Date() - 日期格式化的三种常用方法

## 1. Date() 介绍

### 1.1 Date() 基本使用

Date()日期对象是构造函数，必须使用new来调用我们的日期对象。

```若Date()没有参数时 返回当前时间```

```若Date(timer)有参数时 返回参数设置的时间```

<br/>参数写法：'2012-2-2 08:54:32'（字符串）
<br/>返回值格式：Sun May 28 2023 23:36:28 GMT+0800 (中国标准时间)

```javaScript
// 无参数时
let dateW = new Date();
console.log('当前时间', dateW); // Sun May 28 2023 23:36:28 GMT+0800 (中国标准时间)
// 有参数时
let dateY = new Date('2012-2-2 08:54:32');
console.log('指定时间', dateY); // Thu Feb 02 2012 08:54:32 GMT+0800 (中国标准时间)

```

### 1.2 Date() 常用API

Date() 可以通过许多方法获取日期和时间的各个部分，在格式化时间时我们经常用到这些API。

```javaScript
let date = new Date();
console.log(date.getFullYear()); //当前日期的年 2022
console.log(date.getMonth() + 1); //月份+1 由于月份是0-11计算 所以需要 +1 
console.log(date.getDate()); // 日
console.log(date.getDay()); // 星期几  注意：星期日返回的是0
console.log(date.getHours()); // 时
console.log(date.getMinutes()); // 分
console.log(date.getSeconds()); // 秒

```

## 2. 日期格式化

### 2.1 toLocaleString（原生方法）

Date 对象有一个 toLocaleString 方法，该方法可以格式化日期和时间,同时衍生出另外两种分别获得日期和时间的方法。

```字段说明：```

日期+时间: toLocaleString()
<br/>日期: toLocaleDateString()
<br/>时间: toLocaleTimeString()

```参数说明 (非必填)：```

'en-US', { timeZone: 'America/New_York' }
<br/>en-US : 地区设置(String）
<br/>{ timeZone: 'America/New_York' }: 日期时间格式和时区信息(Object)

```javascript
let timer = new Date()
console.log(timer.toLocaleString()) // 日期+时间 2023/5/28 23:07:35
console.log(timer.toLocaleDateString()) // 日期 2023/5/28 
console.log(timer.toLocaleTimeString()) // 时间 23:10:31 

// 两个参数：（地区设置，日期时间格式和时区信息）
console.log(time.toLocaleString('en-US', { timeZone: 'America/New_York' }))
// 打印结果 5/28/2023, 11:08:39 AM

```

### 2.2 字符串方法

```string.padStart(字符串长度, 填充元素) ```: 用```填充元素```填充```string```字符串，使得产生的新字符串达到所设置的长度（参数一：```字符串长度```）。

```padStart``` 从原字符串左侧开始填充
<br/>```padEnd``` 从原字符串右侧开始填充

```javascript
let str = 'str'
str.padStart(5,'0') // "00str"

// 不指定填充元素时，以空字符串填充
str.padStart(5) // "  abc" 
// 填充元素超出指定长度时，从左->右对填充元素截取
str.padStart(6,'123465'); // "123str"
// 原字符串长度大于设定长度时，以原字符串长度为准 不截断原字符串
str.padStart(2); // "str"

```

#### 2.2.1 利用字符串进行日期格式化
```javascript
console.log(time.getFullYear().toString().padStart(4, '0')) // 年 2023
console.log((time.getMonth() + 1).toString().padStart(2, '0')) // 月 05
console.log(time.getDate().toString().padStart(2, '0')) // 日 29
console.log('星期' + (time.getDay() === 0 ? 7 : time.getDay())) // 周 星期1
console.log(time.getHours().toString().padStart(2, '0')) // 时 01
console.log(time.getMinutes().toString().padStart(2, '0')) // 分 19
console.log(time.getSeconds().toString().padStart(2, '0')) // 秒 55

```

#### 2.2.2 格式化函数封装
```javascript
let time = new Date()

// ① 定义格式化封装函数
function formaData(timer) {
    const year = timer.getFullYear()
    const month = timer.getMonth() + 1 // 由于月份从0开始，因此需加1
    const day = timer.getDate()
    const hour = timer.getHours()
    const minute = timer.getMinutes()
    const second = timer.getSeconds()
    return `${pad(year, 4)}-${pad(month)}-${pad(day)} ${pad(hour)}:${pad(minute)}:${pad(second)}`
}
// 定义具体处理标准
// timeEl 传递过来具体的数值：年月日时分秒
// total 字符串总长度 默认值为2
// str 补充元素 默认值为"0"
function pad(timeEl, total = 2, str = '0') {
    return timeEl.toString().padStart(total, str)
}
// 调用函数
console.log(formaData(time)) // 2023-05-29 00:30:19

// ② 定义格式化封装函数
const formatTimeToStr = (times: Date | string | number, pattern: string) => {
  var date = new Date(times);
  var year = String(date.getFullYear());
  var month = String(date.getMonth() + 1).padStart(2, "0");
  var day = String(date.getDate()).padStart(2, "0");
  var hours = String(date.getHours()).padStart(2, "0");
  var minutes = String(date.getMinutes()).padStart(2, "0");
  var seconds = String(date.getSeconds()).padStart(2, "0");

  if (pattern) {
    pattern = pattern.replace("yyyy", year);
    pattern = pattern.replace("MM", month);
    pattern = pattern.replace("dd", day);
    pattern = pattern.replace("hh", hours);
    pattern = pattern.replace("mm", minutes);
    pattern = pattern.replace("ss", seconds);
  } else {
    pattern = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  return pattern;
};

// times 示例：

// Date 对象:
const date = new Date(); // 当前时间
formatTimeToStr(date, 'yyyy-MM-dd'); // 输出： "2023-10-26"

// 字符串:
const dateString = "2024-01-15T10:30:00";
formatTimeToStr(dateString, 'yyyy年MM月dd日'); // 输出： "2024年01月15日"

// 数字 (时间戳):
const timestamp = 1732652800000; // 表示 2025-01-27 00:00:00 UTC
formatTimeToStr(timestamp, 'MM/dd/yyyy'); // 输出： "01/27/2025"

// pattern 示例：

const now = new Date();
formatTimeToStr(now, 'yyyy-MM-dd'); // 输出： "2023-10-26"
formatTimeToStr(now, 'MM/dd/yyyy hh:mm:ss'); // 输出： "10/26/2023 17:15:30"
formatTimeToStr(now, 'yyyy年MM月dd日 hh时mm分'); // 输出： "2023年10月26日 17时15分"
formatTimeToStr(now); // pattern 为空，使用默认格式： "2023-10-26 17:15:30" 

```

### 2.3 第三方库

除了以上方法外，还有很多第三方库可以用来格式化日期时间，最常用的主要为 Moment.js。

#### 2.3.1 安装 Moment.js

```javascript
npm install moment

```

#### 2.3.2 导入 Moment.js 模块（main.js)

```javascript
import moment from 'moment';
Vue.prototype.$moment = moment

```

#### 2.3.3 格式化时间

```javascript
// `this.$moment()` 输出当前时间的moment对象
console.log(this.$moment().format('YYYY-MM-DD HH:mm:ss')); // 2023-05-29 00:30:19

```