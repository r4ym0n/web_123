- DOM
- BOM
- ECMAScript


## window 对象
```
window.onscroll

document.body.scrollLeft
document.documentElement.scrollLeft


let scrollT = document.body.scrollTop||document.documentElement.scrollTop

```
### 小技巧
- style.transition = '0.5s' 



## location 对象

`console.dir(location)`

- search 代表着get方式带来的参数。 
- reload()
- replace()
- href
- hash 代表URL 中#号跟随的部分

### 使用 hash 实现页面路由
使用 `windows.onhashchange()`  来监听Hash的改变事件。 之后可以对页面来进行不刷新的”跳转“

```
let hash = location.hash
switch(hash):
{
    case '#view1':
        dom.innerHTML = "test"
    case '#view2':
        dom.innerHTML = "test2"
}
```

## history 对象 历史记录
- forward
- back
- go
- state
- pushState()


## Navigator 对象
用于获取浏览器当前的信息。
可以使用 `userAgent` 来进行终端设备的区分。 

## screen 对象




