# ES6新特性
## let const
### let const 阻止变量提升。
## 块及作用域
### *SE6中可以使用{ let } 创造一个块级作用域，代替之前的立即执行函数创建的内部作用域。* 
## Map
#### map的Key可以是string, boolean, number, object, function
## WeakMap
#### 弱键类型，可以用引用类型当成key，当该引用在外部释放后，健值会自动销毁
## Set
## Promise
#### Promise pending 、resolve reject 、.all 、then 、catch
## 箭头函数
### 箭头函数默认绑定 父级this指向
## 字符串
#### 模版字符串
#### .repeat(num);
#### .includes(）
## 模块
#### CommomJS  模块导出 module.exports=
#### ES6 模块导出 export | export default
## 参数
### 为函数提供默认参数 （a=0,b=0）({a=0,b=0}={})
## 解构（数组和对象）
### 类似于Erlang中的模式匹配
## 展开...
#### 将数组和类展开
## 类
#### class extends
#### constructor super static
#### 动态方法名[方法变量]
#### get set
## Async Await
#### async 函数负责返回一个 Promise 对象
```
1. 如果在async函数中 return 一个直接量，async 会把这个直接量通过Promise.resolve()  封装成 Promise 对象;
如果 async 函数没有返回值,它会返回 Promise.resolve(undefined)
2. 一般我们都用await去等带一个async函数完成，不过按语法说明，await 等待的是一个表达式，这个表达式的计算结果是 Promise 对象或者其它值，所以，await后面实际可以接收普通函数调用或者直接量
3. await 只能出现在 async 函数中,如果用在普通函数，就会报错
4. await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中，或者await后的Promise添加catch回调
```
#### 对Promise 的包装
## Symbol 
#### 产生全局唯一的一个key
```
Symbol('foo') === Symbol('foo') // false
Symbol.for('foo') === Symbol('foo') // false
Symbol.for('foo') === Symbol.for('foo') // true
```
## Generator
