# Array  数组API介绍
## *.filter( func )*
## *func --> (item, index) => ()*
**过滤数组中符合条件的值，返回新数组**
## 例子
```javascript {.line-numbers}
let a=[1,2,3,4,5]
let b = a.filter((item, index) => 0 == item % 2)
console.log(b)
```

