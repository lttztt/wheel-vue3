## vue3.0

- index.html文件中引入js文件使用了`type="module"`
- vue3支持在template有多个根标签
- vue3 的 `createApp()`, vue2是 new Vue()
- `createApp(组件)`, `new Vue({template, render})`
- 把main.js改为main.ts后引入的第三方模块可以点进去看类型
- 改为ts后，提示 xxx.vue找不到模块
  原因是ts只能理解`.ts`文件, 不能理解 `.vue`文件
  google -> Vue 3 can not find module， 找到通过 创建`shims-vue.d.ts`文件声明解决