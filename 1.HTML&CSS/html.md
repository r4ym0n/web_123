## HTML

- block 块级元素
- inline 内联元素


- <b> b  </b>
- <i> i </i> 
- <u> u </u>


```
<p>本页面底部可以找到<a href="#Mailing_address">公司邮寄地址</a>。</p>

```


- <main> 存放每个页面独有的内容。每个页面上只能用一次 <main>，且直接位于 <body> 中。最好不要把它嵌套进其它元素。
- <article> 包围的内容即一篇文章，与页面其它部分无关（比如一篇博文）。
- <section> 与 <article> 类似，但 <section> 更适用于组织页面使其按功能（比如迷你地图、一组文章标题和摘要）分块。一般的最佳用法是：以 标题 作为开头；也可以把一篇 <article> 分成若干部分并分别置于不同的 <section> 中，也可以把一个区段 <section> 分成若干部分并分别置于不同的 <article> 中，取决于上下文。
- <aside> 包含一些间接信息（术语条目、作者简介、相关链接，等等）。
- <header> 是简介形式的内容。如果它是 <body> 的子元素，那么就是网站的全局页眉。如果它是 <article> 或- <section> 的子元素，那么它是这些部分特有的页眉（此 <header> 非彼 标题）。
- <nav> 包含页面主导航功能。其中不应包含二级链接等内容。
- <footer> 包含了页面的页脚部分。



<span> 是一个内联的（inline）无语义元素，最好只用于无法找到更好的语义元素来包含内容时，或者不想增加特定的含义时。例如：

<div> 是一个块级无语义元素，应仅用于找不到更好的块级元素时，或者不想增加特定的意义时。例如，一个电子商务网站页面上有一个一直显示的购物车组件。



## CSS
- a {} // element
- .code {} // class
- a.code {} // 元素class
- li em {} // 元素包含
- h1 + p {} // 相邻包含
- a:link {} // 元素状态
- a:visited {}
- a:hover {}



### @规则

媒体查询
```

body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}


```

速记属性 TRBL


```
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;

background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;

```