# Vue3 使用 import.meta.glob 动态加载路由组件


> Vue3 使用 `import.meta.glob` 动态加载路由组件，通过遍历匹配的 `.vue` 文件并添加到路由配置中。


```javascript
// global.ts
export const vueRouters = function (router: Router): void {
  let routerList: Array<RouteRecordRaw> = [];
  const modules = import.meta.glob('../views/**/*.vue')
   for (const path in modules) {
    modules[path]().then((mod) => {
      const file = mod.default;
      if (!file.isRouter) return
      // 首字母转小写 letterToLowerCase 首字母转大写 letterToUpperCase
      router.addRoute({
        path: `/${letterToLowerCase(file.name)}`,
        name: `${letterToUpperCase(file.name)}`,
        component: file
      })
    })
  }
};

```

```javascript
// router.ts
import { vueRouters } from '../services/global'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

vueRouters(router)

```

```xml
// 文件目录结构 

├── components                    // 公共组件存放目录
└── views                         // 路由视图存放目录
    └── Home                      // Home 页面
        └── components            // Home 页面封装组件存放文件
            └── HomeHeader.vue    // Home 页面头部组件
        └── index.vue             // Home 主入口
        └── types                 // Home页面专属类型
    └── Login                     // Login 页面
        └── components            // Login 页面封装组件存放文件
            └── LoginHeader.vue   // Login 页面头部组件
        └── index.vue             // Login 主入口
        └── types                 // Login页面专属类型
    ....

```

## Glob 导入

Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：

```javascript
const modules = import.meta.glob('./dir/*.js')

```

以上将会被转译为下面的样子：

```javascript
// vite 生成的代码
const modules = {
  './dir/foo.js': () => import('./dir/foo.js'),
  './dir/bar.js': () => import('./dir/bar.js')
}

```

你可以遍历 modules 对象的 key 值来访问相应的模块：

```javascript
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod)
  })
}

```

匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eagar: true } 作为第二个参数：

```javascript
const modules = import.meta.glob('./dir/*.js', { eager: true })

```

以上会被转译为下面的样子：

```javascript
// vite 生成的代码
import * as __glob__0_0 from './dir/foo.js'
import * as __glob__0_1 from './dir/bar.js'
const modules = {
  './dir/foo.js': __glob__0_0,
  './dir/bar.js': __glob__0_1
}

```