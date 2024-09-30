# 这可能是最简单的docx、pdf、excel文件预览vue组件库

## 使用

[查看demo演示](https://501351981.github.io/vue-office/examples/dist/)

[github源码](https://github.com/501351981/vue-office)

## 安装

有三个组件，可以分别根据需要进行安装

```
//docx文档预览组件
npm install @vue-office/docx

//excel文档预览组件
npm install @vue-office/excel

//pdf文档预览组件
npm install @vue-office/pdf
```

## 使用示例

### docx文档的预览

```
<template>
  <vue-office-docx :src="docx" @rendered="rendered"/>
</template>

<script>
//引入VueOfficeDocx组件
import VueOfficeDocx from '@vue-office/docx'

export default {
  components:{
    VueOfficeDocx
  },
  data(){
    return {
      docx: 'http://static.shanhuxueyuan.com/test6.docx' //设置文档地址
    }
  },
  methods:{
    rendered(){
      console.log("渲染完成")
    }
  }
}
</script>
```

### excel文档预览

```
<template>
  <vue-office-excel :src="excel" @rendered="rendered"/>
</template>

<script>
//引入VueOfficeExcel组件
import VueOfficeExcel from '@vue-office/excel'
//引入相关样式
import '@vue-office/excel/lib/index.css'

export default {
  components:{
    VueOfficeExcel
  },
  data(){
    return {
      excel: 'http://static.shanhuxueyuan.com/demo/excel.xlsx'//设置文档地址
    }
  },
  methods:{
    rendered(){
      console.log("渲染完成")
    }
  }
}
</script>
```

### pdf文档预览

```
<template>
  <vue-office-pdf :src="pdf" @rendered="rendered"/>
</template>

<script>
//引入VueOfficePdf组件
import VueOfficePdf from '@vue-office/pdf'

export default {
  components:{
    VueOfficePdf
  },
  data(){
    return {
      pdf: 'http://static.shanhuxueyuan.com/test.pdf' //设置文档地址
    }
  },
  methods:{
    rendered(){
      console.log("渲染完成")
    }
  }
}
</script>
```

原文：[前端林叔:这可能是最简单的docx、pdf、excel文件预览vue组件库](https://juejin.cn/post/7184993620410236983)