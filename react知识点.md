# React知识点总结
## React Native相对于原生的ios和Android有哪些优势？
### 可以像编写普通网页的形式开发IOS和Android，代码的复用率可以达到90%以上，可以做到不更新客户端的情况下，更新UI。但是，版本更新太快，且不具备向下兼容的特性，所以版本升级不可控。性能方面理论上比原生的要差，占用内存高点，但是总体效果个人感觉不出来。
## React的生命周期方法
### 初始化
1. getDefaultProps
2. getInitialState
3. componentWillMount
4. render
5. componentDidMount
### 更新
1. componentWillReceiveProps
2. shouldComponentUpdate
3. componentWillUpdate
6. render
4. componentDidUpdate
### 卸载组件
1. componentWillUnmount
## 调用setState发生了什么？
### 如果在合成事件和钩子函数中调用setState将会是异步操作，不能马上获取最新的state，可以在回到函数中拿到最新的state，如果在原生dom和定时器中调用setState，state会马上更新，并渲染UI
## props和state 的特点
1. props和state变化都会引起UI变化
2. props的更新只能从父控件传递过来
3. state要改变只能通过setState方法
4. props的初始值通过getDfaultProp获取
5. state的初始值通过getInitialState获取
## shouldComponentUpdate是做什么用的
### 在某些情况下父组件props变化，组件本身执行setState，其实子组件props或组件自身的state并没有变化，无需执行diff算法，这个时候可以在该方法下做一些简单的判断返回false，组织程序进行执行。
## Redux状态管理的流程
### Redux有三部分：Store、Action、Reducer，其中Store中包换有：getState、dispatch、replaceReducer三个方法。在React和使用Redux需要引入两个包：Redux和React-Redux
## 使用点.map循环this.props.children会报错为什么？
### this.props.children 也许是undefined，也许是一个object、也许是一个Arrary 所以要使用React.Children.map去遍历子组件
## Flex布局
### 容器 子项 横轴 纵轴

## React组件划分
1. 受控组件
2. 非受控组件
3. 无状态组件
4. 有状态组件
5. 容器组件
6. 试图组件

## Redux的优缺点
1. 优点：使得数据单向流动，数据可预测，代码容易维护。
2. 缺点：增加了很多容器组件，和状态代码，性能受到些许影响。

## react性能优化
### 一般情况下都是将shouldComponentUpdate 重写，减少虚拟DOM操纵。

## middleware是什么，写一个
### 应用middleware后
```
dispatch --> reducer
new dispatch
md1->md2->md3-> ... -> dispatch -> reducer
applyMiddleware 中对 middleware 进行了 .map操作，其中对每一个middleware使用闭包进行了store绑定，store中提供了dispatch和getState方法，之后又调用了compose方法对middlware进行克里化操作，next为进行下一个middleware，直到最后一个，如果调用了store.dispatch,将会递归重新开始第一个middleware
export default store => next => action => {
    next(action)
}
```

## 写一个深clone算法
1. lodash
2. Json.parse() \ Json.stringify()
3. 自己写

## React中的keys的作用
### 用来追踪列表元素被追加、移动、删除的辅助标识。

## createElement 与 cloneElement 的区别是什么？
### createElement 创建一个React元素，cloneElement复制一个现有元素并追加新的属性生成新元素

## Fetch
对于不支持fetch的手机需要引入polyfill,可以通过polyfill.io来动态引入这个文件。
fetch().then().catch()
更具response返回的状态码进行成功失败的判定，根据header中的content-type来进行返回数据的解析。
zlfetch
polyfill

