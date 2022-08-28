



```
// 对象快速拷贝
let obj1 = {...obj2}

let obj1 = {
  a: 123,
  c:123,
  ...obj2 

}
```


set/map

## 箭头函数

```

let fn = (a, b) => a+b;

// 不定参数 rest
let fn = (...args) => {
    console.log(atgs)
}

// 参数默认值

let fn = ( a=123, b=123 ) => {
    console.log(a,b)
}
```

### this 
箭头函数中的this 和他所在的作用域下的this一致。



### Array
构造函数静态方法
- Array.from() // 把一个类数字转化为真正数组
- Array.of() // 传入的不定参数组成一个数组

数组对象原型函数
- find
- findOf

```
arr.find((item, idx) => {
    return item >= 3
})

```

- flatMap // 碾平数组

 