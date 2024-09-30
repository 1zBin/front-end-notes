# JS实现数组扁平化的五种方法

## 1. flat(参数) 方法

参数：需要降低的维度，设置为 Infinity（无限）可以将任意维度的数组变为一维数组。

```javascript
let arr = [1,2,[3,[4,5,[6,[7]]]]]
console.log(arr.flat(Infinity));

```

## 2. reduce 方法 + 递归调用

```javascript
function flatFn(arr){
    return arr.reduce((result,item)=>{
        return result.concat(Array.isArray(item)?flatFn(item):item)
    },[])
};
console.log(flatFn(arr));

```

## 3. 方法三：数组转成字符串，再将字符串转成数组

```javascript
function flatFn2(arr){
    return arr.join(',').split(',').map(item =>{
        return parseInt(item);
    })
}
flatFn2(arr);

```

## 4. 递归调用 + concat 合并数组

```javascript
function flatten(arr) {
	let result = [];
	arr.forEach((item)=>{
	if (Array.isArray(item)) {
	// 是数组的话，递归调用
	result = result.concat(flatten(item));
	} else {
		// 不是数组的话push
	     result.push(item);
	}
	})
 return result; 
}
		
const result = flatten(arr);
console.log(result);

```

## 5. 扩展运算符实现

```javascript
function flatten(arr) {
  while (arr.some(item => (Array.isArray(item)))) {
		arr = [].concat(...arr);	
	}
  return arr;
}
const result = flatten(arr);
console.log(result);

```