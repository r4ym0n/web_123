## String 
- charCodeAt
- indexOf
- lastIndexOf 
- slice // 从前x或者后x切片
- substr // 过期
- substring
- split
- concat
- toLower
- toUpper
- trim()

## Array
- push
- pop
- unshift
- shift
- sort (默认的都是以Uincode方式来进行排序)

```
[3,7,8,1,2,5,3].sort((a,b)=>{
    return a - b;
})

```

- map & reduce
- some // check 任意数组元素通过测试
- every // check 全部数组元素通过测试



## Object
- Object.values()
- Object.keys()
- delete

## JSON
- parse
- stringify

## math
- celi 
- floor



- JS 的类成员函数是不能使用箭头函数来进行定义的，因为这样的话成员函数就失去了this。所以类成员函数在被指向或者被其他函数调用的时候需要使用bind方法，绑定到原对象上去。

- 使用state 内使用 array 来进行历史状态的保存，使用 concat 来对新的数据来进行拼接之后再setState
- 在元素的事件handle里面是需要的是函数的声明，而不是一个函数的调用。所以这里一般需要使用箭头函数/函数名/工厂函数。
  
  ```
  const App = () => {
  const [value, setValue] = useState(10)

  const hello = () => {
    const handler = () => console.log('hello world')
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  )
}

  canst setToValue = (value) => () => {
    setValue(value)
  }
  // equal
  canst setToValue = (value) => {
    return () => setValue(value)
  }
  
  ```