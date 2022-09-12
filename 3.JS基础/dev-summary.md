https://blog.csdn.net/laok_/article/details/75760572


JS获取子节点、父节点和兄弟节点的若干种方式
```
var a = document.getElementById("test").getElementsByTagName("div");

var b =document.getElementById("test").childNodes;

var getFirstChild = document.getElementById("test").children[0];

var getFirstChild = document.getElementById("test").firstChild;

var getFirstChild = document.getElementById("test").firstElementChild;

 var getLastChildA = document.getElementById("test").lastChild;
 var getLastChildB = document.getElementById("test").lastElementChild;

 var p1 = document.getElementById("test").parentElement;

var p2 = document.getElementById("test").offsetParent;

var brother4 = document.getElementById("test").nextElementSibling;


```


Nextjs 多个 ClassName
```
<li className={[styles.projects_pd_text, styles.projects_pd_subdetail].join(" ")}>
   {sub}
</li>
```
