# JavaScript中扁平与树形数据的转换



## 一、扁平转树形

在 JavaScript 中，可以使用递归算法将扁平的数据转换为树形结构。

扁平数据通常是一个带有 parentId 属性的数组，而树形结构通常是一个带有 children 属性的对象。



### 1.方法一

下面是一个简单的例子，它演示了如何将扁平数组转换为树形对象：

```javascript
let data = [
  { id: 1, pid: 0, name: '沃尔玛' },
  { id: 2, pid: 0, name: '生鲜区' },
  { id: 3, pid: 1, name: '日用品区' },
  { id: 4, pid: 2, name: '鱼' },
  { id: 5, pid: 2, name: '牛肉' },
  { id: 6, pid: 13, name: '卫生纸' },
  { id: 7, pid: 3, name: '牙刷' },
  { id: 8, pid: 7, name: '电动牙刷' },
  { id: 9, pid: 7, name: '普通牙刷' }
];

function convertToTree(flatData) {
  let treeData = [];
  let map = new Map(); 
  let outputObj, pid;
  for (let i = 0; i < flatData.length; i++) {
    pid = flatData[i].pid;
    if (map.has(pid)) {
      if (!map.get(pid).childrens)
        map.get(pid).childrens = [];
      let obj = new Object(flatData[i]);
      map.get(pid).childrens.push(obj);
      map.set(flatData[i].id, obj);
    } else if (!map.has(pid) && pid == 0) {
      outputObj = new Object(flatData[i]);
      treeData.push(outputObj);
      map.set(flatData[i].id, outputObj);
    }
  }
  return treeData;
}

let TreeData = convertToTree(data);
console.log(TreeData);
```

###  2.方法二

使用递归算法将扁平数组转换为树形对象：

```javascript
const flatData = [
    { id: 1, name: 'Node 1', parentId: null },
    { id: 2, name: 'Node 2', parentId: 1 },
    { id: 3, name: 'Node 3', parentId: 2 },
    { id: 4, name: 'Node 4', parentId: 3 },
    { id: 5, name: 'Node 5', parentId: 3 }
];

function convertToTree(flawww.cppcns.comtData, parentId = null) {
    const children = flatData.filter(node => node.parentId === parentId);
    if (!children.length) {
        return null;
    }
    return children.map(node => ({
        ...node,
        children: convertToTree(flatData, node.id)
    }));
}

const treeData = convertToTree(flatData);
console.log(treeData);
```

**该算法的流程为：**

使用 filter() 函数过滤出所有的子节点。
使用 map() 函数构造每个子节点的新结构，并使用递归来处理子节点的 children 属性。



### 3.方法三

还有一些第三方库可以帮助你转换扁平数据为树形结构，例如 lodash 中的 *.groupBy() 和* .mapValues() 方法可以帮助你将扁平数据转换为树形数据。

```javascript
const flatData = [
    { id: 1, name: 'Node 1', parentId: null },
    { id: 2, name: 'Node 2', parentId: null },
    { id: 3, name: 'Node 3', parentId: 1 },
    { id: 4, name: 'Node 4', parentId: 2 },
    { id: 5, name: 'Node 5', parentId: 2 }
];

const tree = _(flatData)
    .groupBy('parentId')
    .mapValues((children, parentId) => ({
        id: parentId || 'root',
        children: children.map(({ id, name, parentId }) => ({ id, name, parentId }))
    }))
    .values()
    .value();

console.log(tree)
```

在这种情况下，假设parentId为null的数据项是根节点,那么所有其它的数据项的 parentId 分别对应它的父节点，我们可以使用 groupBy() 来将所有节点根据它们的 parentId 分组，然后我们可以使用 mapValues() 来构造每个组的新结构。



### 4.方法四

```javascript
const flatData = [
    { id: 1, name: 'Node 1', value: 1, parentId: null },
    { id: 2, name: 'Node 2', value: 2, parentId: 1 },
    { id: 3, name: 'Node 3', value: 3, parentId: 2 },
    { id: 4, name: 'Node 4', value: 4, parentId: 3 },
    { id: 5, name: 'Node 5', value: 5, parentId: 3 }
];

/**
 * 将扁平数组转换为树形对象，
 * 适用于来自同一个表的数据，即idName的数据不重复
 * 
 * @param {*} flatData 同级数组数据
 * @param {*} idName 唯一id
 * @param {*} pidName 父级id
 * @param {*} nameName 自定义(Cascader 级联选择器)键名称
 * @param {*} valueName 自定义(Cascader 级联选择器)值名称
 * @returns 树形结构数组数据，适用于Cascader 级联选择器组件
 */
function convertToTree(flatData, idName, pidName, nameName, valueName) {
    let treeData = [];
    if (!Array.isArray(flatData)) {
        return treeData;
    }
    flatData.forEach((item) => {
        delete it编程em.children;
    });
    let map = {};
    flatData.forEach((item) => {
        // 深拷贝，该方式将使该转换方法失效
        // map[item[idName]] = jsON.parse(JSON.stringify(item));
        // 浅拷贝，将对 item 的引用传递给 map
        map[item[idName]] = item;
    });
    flatData.forEach((item) => {
        // 深拷贝，该方式将使该转换方法失效
        // let parent = JSON.parse(JSON.stringify(map[item[pidName]]));
        // 浅拷贝，将对 map 的引用传递给 parent
        let parent = map[item[pidName]];
        if (parent) {
            // 利用了浅拷贝的引用传递，最终 flatData 中的 item 将会改变
            (parent.children || (parent.children = [])).push(
                nameName && valueName ? Object.assign(item, { label: item[nameName], id: item[valueName] }) : item);
        } else {
            treeData.push(
                nameName && valueName ? Object.assign(item, { label: item[nameName], id: item[valueName] }) : item);
        }
    });
    return treeData;
}

const treeData = convertToTree(flatData, 'id', 'parentId', 'name', 'value');
console.log(treeData);
```



## 二、树形转扁平  

### 1.方法一

在 javascript 中，可以使用递归算法将树形结构数据转换为扁平数组。

下面是一个简单的例子，它演示了如何将树形数据转换为扁平数组：

```javascript
const treeData = [{
    id: 1,
    name: 'Node 1',
    children: [
        { id: 2, name: 'Node 2', children: [{ id: 3, name: 'Node 3' }, { id: 4, name: 'Node 4' }] },
        { id: 5, name: 'Node 5' }
    ]
}];

function convertToFlat(data, parentId = null) {
    return data.reduce((acc, curr) => {
        acc.push({ ...curr, parentId });
        if (curr.children) {
            acc = acc.concat(convertToFlat(curr.children, curr.id));
        }
        return acc;
    }, []);
}

const flatData = convertToFlat(treeData);
console.log(flatData);
```

**算法的流程为：**

使用 reduce() 函数遍历每个节点，并将父节点的 id 作为参数传递给递归函数。
使用 push() 函数将当前节点添加到结果数组中。
使用 concat() 函数将递归调用的结果与结果数组连接在一起。
如果当前节点有 children 属性，则递归调用 convertToFlat() 函数，并将当前节点的 id 作为父节点传递给函数。
**注意：**该方法返回的扁平结构数据未将 children属性删除，因此存在冗余的数据。



​    这是一种将树形结构数据转换为扁平数组的方法，如果有其他特定的需求，还可以使用其他方法来转换数据，例如使用广度优先遍历算法，使用队列存储节点。



### 2.方法二

```javascript
const treeData = [
    {
        id: 1,
        name: 'Node 1',
        children: [
            {
                id: 2,
                name: 'Node 2',
                children: [
                    { id: 3, name: 'Node 3' },
                    { id: 4, name: 'Node 4' },
                ]
            },
            { id: 5, name: 'Node 5' },
        ]
    },
    {
        id: 6,
        name: 'Node 6',
        children: [
            { id: 7, name: 'Node 7' }
        ]
    },
];

function convertToFlat(treeData, parentId = null) {
    let flatData = [];
    for (let node of treeData) {
        flatData.push({ id: node.id, name: node.name, parentId });
        if (node.children) {
            flatData = flatData.concat(convertToFlat(node.children, node.id));
        }
    }
    retuopwKmXrn flatData;
}

const flatData = convertToFlat(treeData);
console.log(flatData);
```

**算法的流程为：**

-  创建一个空的扁平数组。 
-  递归遍历树形数组中的每个节点，将当前节点添加到扁平数组中。 
-  对于当前节点的子节点，继续使用递归，并将子节点添加到扁平数组中。 
-  返回扁平数组 

**注意：**该方法需要手动构造push 到扁平数组的对象，通用性较差。



### 3.方法三

在 JavaScript 中，可以使用递归算法将树形结构数据转换为扁平数组。

下面是一个简单的例子，它演示了如何将树形数据转换为扁平数组：

```javascript
let data = [{
    id: 1, pid: 0, name: '沃尔玛', childrens: [
        {
            id: 2, pid: 1, name: '生鲜区', childrens: [
                { id: 4, pid: 2, name: '鱼' },
                { id: 5, pid: 2, name: '牛肉' }
            ]
        },
        {
            id: 3, pid: 1, name: '日用品区', childrens: [
                { id: 6, pid: 3, name: '卫生纸' },
                { id: 7, pid: 3, name: '牙刷' }
            ]
        }
    ]
}];

function convertToFlat(treeData) {
    let flatData = [];
    for (let i = 0; i < treeData.length; i++) {
        if (treeData[i].childrens) {
            flatData.push(...convertToFlat(treeData[i].childrens));
            delete treeData[i].childrens;
        }
        flatData.push({ ...treeData[i] });
    }
    return flatData;
}

let flatData = convertToFlat(data);
console.log(flatData);
```

该方法通用性较强，对树形结构数组数据内部具体的属性名 要求较小（除 childrens）。