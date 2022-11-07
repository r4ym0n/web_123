## 如果在react 的元素中关联多个属性
使用数字作为表达式的内容即可。
```
<View style={[styles.base, styles.background]} />

```



## 关于React 事件中的this 

- https://zh-hans.reactjs.org/docs/handling-events.html

内容是比较重要的，主要是和this的机制相关。

元素自身的this 使用 bind 函数或者使用 箭头函数来进行直接的本级别的 this 传递。

## REACT中的环境变量
静态页面，所以变量只会在在编译时候生效

```
// 在环境变量中配置，使用 env 来进行变量的引用。
{process.env.REACT_APP_SECRET_CODE}

```
- https://www.html.cn/create-react-app/docs/adding-custom-environment-variables/


## react 的表单

- https://formik.org/



## 状态提升

很重要的一个内容。是个重点内容。

简单来讲，把状态处理的函数放在父级元素进行定义，之后使用 props 的方式传递到子元素中去。

这样在子元素触发了状态改变之后，可以把数据流传递到父级别的元素。父级别元素可以再进行更新触发。应用到子元素其他兄弟节点中去。

> 在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。通常，state 都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠[自上而下的数据流](https://zh-hans.reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down)，而不是尝试在不同组件间同步 state。



## 组合

react 中推荐使用组合的方式来实现对模板组件的拓展而不是继承

例如下面的 示例代码就很好是实现了一个 wrapper的复用。

```
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

如果模板元素存在多个自定义位置，可以使用 props 来进行传递

```
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```

## 拖拽上传组件
react-dropzone

https://react-dropzone.js.org/#src
