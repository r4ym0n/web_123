
## HTML表单输入框对齐的实现
label 和 input 都是inline元素
```
<div id="item">
      <label></label>
      <input type="text" id="" name=""/>
</div>
```

这里如果想让他们实现对齐的话 这里需要把 label 设置为inline-block样式，这样就使用block 的特性实现了块级元素的右对齐
```  
label {
    width: 150px;
    display: inline-block;
    text-align: right;
}
```

### 内容补充
常见的块级元素有 DIV, FORM, TABLE, P, PRE, H1~H6, DL, OL, UL 等。
常见的内联元素有 SPAN, A, STRONG, EM, LABEL, INPUT, SELECT, TEXTAREA, IMG, BR 等。

- display:block
  - block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。
  - block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。
  - block元素可以设置margin和padding属性。
- display:inline
  - inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
  - inline元素设置width,height属性无效。
  - inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。
- display:inline-block
  - 简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性又具有inline的同行特性。


## 为什么button 和 input 不一样高
直接说结论：行内元素的基线是不同的

使用 `vertical-align: middle;` 来设置行内元素属性使用中线对齐


```
vertical-align: baseline;
vertical-align: sub;
vertical-align: super;
vertical-align: text-top;
vertical-align: text-bottom;
vertical-align: middle;
vertical-align: top;
vertical-align: bottom;

```

## Flex 布局
新的 重要的 快速方便精准的布局方式。
https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

### 其他的布局方式
https://juejin.cn/post/7005557017716883470