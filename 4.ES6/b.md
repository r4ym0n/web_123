## 对象的创建

### 工厂模式

```
function Person(name, age, skill) {
    let obj = {}
    obj.name = namel
    obj.age = age;
    obj.skill = () => {
        console.log(skill);
    }
    return obj;
}

let tmp = Person('123', 123, '123')
```

### 构造函数

```
function Person2(name, age, skill) {
    this.name = namel
    this.age = age;
    this.skill = () => {
        console.log(skill);
    }
}

let tmp2 = new Person2('123', 123, '123')


```

静态属性和方法属于构造函数 

### 对象的原型
构造函数的功能空间 `__proto__`
把对象的共有的函数放在原型中。
```

function Person(name, age, skill) {
    this.name = namel
    this.age = age;
}

Person.prototype.skill = function(skill) {
    console.log(skill)
}
```
prototype的constructor 会指向构造函数


### 原型链
属性的查找遵循 构造函数 原型 原型链 的顺序进行
**一切对象的原型都是Object**



  
## 继承 
### This指向的变更
用来更改作用域的This的指向
- call
- apply
- bind

### 实现原理
构造函数的属性继承模拟
```
function Dad(name, age) {
    this.name = name;
    this.age = age;
    this.money = 100000;
}

function Son(name, age) {
    // 这里把Dad的this指向到Son
    Dad.call(this, name, age)
}

let test = new Son('a', 13)
console.log(test.money) //100000
```

还需完成原型的继承。
原型使用深拷贝方式来进行处理。