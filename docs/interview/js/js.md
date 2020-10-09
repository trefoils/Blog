# Javascript

## new一个新实例的过程是怎样的？

1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
1. 属性和方法被加入到 this 引用的对象中。
3. 新创建的对象由 this 所引用，并且最后隐式的返回 this.

## Js的原型链是怎么理解的？
![images](/images/interview/proto.jpg)

### 原型
* 任何函数都有 prototype 属性
* 函数的prototype属性值是个对象，我们把这个对象叫做原型（原型对象）
* 通过构造函数创建的实例可以直接访问构造函数的prototype属性上的任何成员
* 任何对象都有proto 属性, 指向的是构造函数的prototype属性，也就是原型constructor 属性是原型中自带的属性，指向了当前的构造函数

### 原型链
任何对象都有proto属性，指向的是原型对象，原型对象也是对象，那也有proto属性，也就是说原型对象也有自己的原型对象。这样形成的链式结构，叫做原型链


**一篇写的很不错的文章[可参考](https://zhuanlan.zhihu.com/p/22989691)**


## Js的闭包

闭包是指有权访问另一个函数作用域中的变量的函数 

```
function a () {
  var x = 123;
  function b() {
    console.log(x);
  }
  return b;
}

var b = a();
b();  // 123
```
### 闭包优缺点：

**优点：**

1、属性的私有化，在b返回后，出了b函数中能对x进行操作，其它地方都不能对x进行操作。

2、防止变量污染。

**缺点：**

容易造成内存泄漏，因为如果后期不对全局中的b进行处理（例如：赋值为null）;

