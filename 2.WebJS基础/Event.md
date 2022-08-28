## event
### 两种绑定方式
```
// 会被覆盖
a.onclick = ()=>{
   // xxx
}

a.addEventListener('click', function() {
    // xxx
})


// 取消绑定函数必须是命名函数。
// a.addEventListener(event, fn)
```



### JS的冒泡事件流
两种事件流类型
1. 冒泡
2. 捕获

#### 事件冒泡 默认
在HTML中元素之间是存在包含关系的。
`html > body > div > p`
点击子元素的时候，其父元素的绑定的对应事件也会被触发

```
a.addEventListener('click', function() {
    // xxx
}, true)
```

事件监听配置
- capture 是否补货
- once 单次触发
- passive 阻止取消默认事件(为true，在事件中不允许阻止默认行为)

#### 取消事件冒泡
- e.stopPropagation() // 标准
- e.cancelBubble = true

### 事件对象
存储许多和事件相关的属性
- target 触发事件源的元素
- currentTarget 是事件绑定的元素

#### 事件委托
给父级别绑定事件，但是实际上的源元素是其子元素。
比如对所有的 li来进行事件的绑定，就可以单独对其父级ul来进行事件绑定，之后在回调中使用 `e.target` 来对操作的子元素来进行变更.
**可以用来优化对于子元素的循环事件绑定的问题**
```
ul.addEventListener('click', (e)=> {
    // 对需要的子元素进行过滤
    if (e.target.tagName === 'LI' )
    e.target.style.background = 'yellow';
})

```

#### 阻止默认事件
比如很多地方的阻止右键点击以及阻止复制等等。
```
a.addEventListener('click', (e)=> {
    console.log(e);
    e.preventDefault();
})

```
### 鼠标事件

#### 鼠标覆盖事件
- mouseover // 跨子元素 触发
- mouseout  // 跨子元素 触发
- mouseenter    // 跨子元素 不触发
- mouseleave    // 跨子元素 不触发

#### 鼠标跟随
```
// let a= dom-obj
document.addEventListener('mousemove', (e)=> {
    a.style.left = e.pageX + 'px';
    a.style.top = e.pageY + 'px';
})

```

### 键盘事件
- keydown
- keyup
- e.key
- e.keyCode
- e.ctrlKey
- e.altKey
- e.shiftKey


那


