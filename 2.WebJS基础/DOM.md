页面都是由DOM树构成的
DOM 书有 DOM 节点

`let list = document.querySelector('#list')`

ChildNodes 也是属于DOM节点的一部分，不一定是元素

`console.log(document.childNodes)`



```
list.childNodes.forEach(item=>{
    consoe.log(item, item.nodeType, item.nodeName)
})
```

节点类型
- 1 元素节点 （标签名称）
- 3 文本节点 （#text）
- 8 注释节点（#comment）
- 9 document （#document）
- 10 文档声明 （html）

DOM 关系
1. 父子级
   - firstElementChild
   - lastElementChild
   - parentNode
   - parentElement

2. 兄弟级
   - nextSibling
   - nextElementSibling
   - previousSibling
   - previousElemrntSibling


```
let list = document.querySelector('#list')
let p2 = list[2]
let pn = p2.nextSibling

children = [...children].flter(item=>item.nodeType == 1 )
```



```
document.getElementsByTagName('body') instanceof HTMLCollection // true

const htmlCollection = document.getElementsByTagName('body')
console.log(htmlCollection.item(0)) // <body>...</body>
console.log(htmlCollection.length()) // 1



document.body.childNodes instanceof NodeList // true
document.querySelectorAll('body') instanceof NodeList // true or false
document.getElementsByClassName('body') instanceof NodeList // false or true

```


> [HTMLCollection 和 NodeList 的区别](https://juejin.cn/post/6977000721938022407)




## DOM 属性以及操作
```
let box = document.quarySelector('#box');
box.getAttribute('xxx')
box.setAttribute('xxx', 'asd')
// remove/has
```

JS-DOM属性操作和ECMA的操作
1. 一个是存储在文档，另一个是存在在内存中的
2. 存在ECMA 中的属性在 元素刷新之后会丢失。


### html5 
自定义属性操作
```
<div id="box" data-abc='test'> xax </div>
<script>
{
    let box = documentSelector('#box');
    console.log(box.dataset.abc  )
    box.dataset.abc = '';
    

}
</script>


```

## DOM 节点操作
- 节点的创建
  - createElement
- 节点的增删改
  - insertBefore
  - appendChild
  - replaceChild
  - removeChild
- 节点的克隆
  - cloneNode
    - deep：克隆元素本身以及内容和后代节点
    - 默认倩克隆：只克隆元素本身以及其自身属性

如果操作的是已存在元素，那么实际上是对这个元素做移动操作。

```
element = document.createElement('h1');
h1.innerHTML = 'this is H1';

box.appendChlid(h1) 
```

## 文档碎片
一个临时性HTML容器，用于避免手动的 HTML 字符串拼接的不合理方式。
```
let fragment = document.createDocumentFragment()
fragment.appendChild(document.createElement('h1'))

domobj.appendChild(fragment)
```


## 小技巧

- `console.time(1)`
- `console.timeEnd(1)`
- `console.dir()`
