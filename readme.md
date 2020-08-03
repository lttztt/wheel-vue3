# vue3 的基础轮子

## switch轮子

1. 明确需求，设计原型（借鉴其他ui框架）
2. API的设计，如何使用更简单优雅

*实现步骤*

1. html和css（其中动画用css3动画搞定改变一个属性）
2. 添加交互（使用内部数据）
3. 接受外部数据（props和event事件）
4. 使用`v-model`简化 props 和 emit模型

*vue3有什么不同*

1. 在`setup`函数中初始化变量和方法并且返回他们（可以替代data和methods）
2. setup的第一个参数是`props`，第二个参数是`context`
3. 使用了`context.emit()`，和`this.$emit()`一样
4. 新 v-model 代替以前的 v-model 和 .sync

*总结：*

- `$event`的值是emit的第二个参数，是尤雨溪用来简化监听$emit的返回值的
- 使用 ref 创建内部数据
- 使用 CSS transition 添加过渡动画
- `v-model`是对父子通信的简化（有自己的框框`xx:update`)