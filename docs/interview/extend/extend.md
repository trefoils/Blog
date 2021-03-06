# 2020面试题
## 一、CSS

### 1、介绍一个标准盒模型？`Border-box`和`content-box`的区别？

CSS中盒模型有两种，`w3c标准盒模型`和`ie盒模型(怪异盒模型)`，相同之处是都是对web中元素计算尺寸的模型，不同之处在于两者的计算方式不同

`w3c标准盒模型`中width指的是内容区域content的宽度；height指的是内容区域content的高度。
```
标准盒模型下盒子的大小  = content + border + padding + margin
```
`ie盒模型`中的width指的是内容、边框、内边距总的宽度（content + border + padding）；height指的是内容、边框、内边距总的高度
```
怪异盒模型下盒子的大小=width（content + border + padding） + margin
```
::: tip 注意
当设置为box-sizing:content-box时，将采用标准模式解析计算（默认模式）；
当设置为box-sizing:border-box时，将采用怪异模式解析计算；
:::

### 2、BFC是什么？触发BFC的条件是什么？有哪些应用场景？

BFC是css布局的对象和基本单位，Bfc就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。

**布局规则**

* 内部的元素会在垂直方向一个接一个的放置

* Bfc区域不会和float box重叠

* 计算bfc的高度，浮动元素也参与计算

**触发条件**

Float属性不为none、position位absolute或者fixed、overflow不为visible、display为inline-block, table-cell, flex, inline-flex, table-caption

**应用场景**

* 清除内部浮动，触发父元素的bfc属性，防止浮动导致父元素高度塌陷

* 分属不同的bfc，阻止margin重叠

* 防止元素被浮动元素覆盖

* 自适应两栏布局
### 3、`flex`布局，如何把8个元素分两行摆放？

```html
//包裹元素
Flex-flow: row wrap;
Align-content: flex-start

//被包裹元素
Flex:0 0 25%;
```

`Flex`属性是`flex-grow`,` flex-shrink`, `flex-basis`的简写，默认值为`0，1，auto`

`Flex-grow: 0`默认不放大

`Flex-shrink: 0`不缩小

`Flex-basis: auto`项目占据主轴的空间

### 4、如何通过flex实现一个容器内的三个元素，左右固定，中间自适应，并且上下居中的布局
```html
<div class="box">
  <div class="inner1"></div>
  <div class="inner2"></div>
  <div class="inner3"></div>
</div>

<style>
.box{
  display: flex;
  height: 300px;
  align-items: center;
  border:1px  solid  gray;
}
.box div{
  height: 100px;
  border:1px solid red;
}
.inner1,.inner3{
  width: 200px;
  background: wheat;
}
.inner2{
  background: tomato;
  flex:1;
}
</style>
```
### 5、前端中的hack是什么意思?常见的hack技术？
针对不同浏览器编写带有前缀的css 就是 css hack,也就是大家所说的前端hack了
::: tip css hack原理
针对不同的浏览器编写不同的样式代码
:::
CSS hack分类

CSS Hack大致有3种表现形式，CSS属性前缀法、选择器前缀法以及IE条件注释法（即HTML头部引用if IE）Hack，实际项目中CSS Hack大部分是针对IE浏览器不同版本之间的表现差异而引入的。

* 属性前缀法(即类内部Hack)：例如 IE6能识别下划线”_”和星号” * “，IE7能识别星号” * “，但不能识别下划线”_”，IE6~IE10都认识”\9”，但firefox前述三个都不能认识。
* 选择器前缀法(即选择器Hack)：例如 IE6能识别*html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}。
* IE条件注释法(即HTML条件注释Hack)：针对所有IE(注：IE10+已经不再支持条件注释)： <!–[if IE]>IE浏览器显示的内容 <![endif]–>，针对IE6及以下版本： <!–[if lt IE 6]>只在IE6-显示的内容 <![endif]–>。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效。

### 6、CSS 阻塞 I/O 初探

1. css 会阻塞 js 加载么？
css加载会阻塞后面JS脚本/语句

2. CSS 影响 DOM 渲染么？
css影响DOM渲染，但是不会影响DOM解析

 

## 二、Js

### 0.0、事件委托是什么？其优点是什么？
事件委托 本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到 目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。

使用事件代理我们可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。并且使用事件代理我们还可以实现事件的动态绑定，比如说新增了一个子节点，我们并不需要单独地为它添加一个监听事件，它所发生的事件会交给父元素中的监听函数来处理。

### 0.1、什么是跨域？如何解决？
同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port），当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同即为跨域

跨域解决方法
1. 设置document.domain解决无法读取非同源网页的 Cookie问题

> 因为浏览器是通过document.domain属性来检查两个页面是否同源，因此只要通过设置相同的document.domain，两个页面就可以共享Cookie（此方案仅限主域相同，子域不同的跨域应用场景。）

2. 跨文档通信 API：window.postMessage()

> 调用postMessage方法实现父窗口http://test1.com向子窗口http://test2.com发消息（子窗口同样可以通过该方法发送消息给父窗口）

3. JSONP

> JSONP(JSON with Padding)是JSON的一种“使用模式”，可用于解决主流浏览器的跨域数据访问的问题。
>
> 不支持post请求，因为其本质上是通过script标签获取数据, script标签显然只支持GET

4. CORS
> 是现代浏览器支持跨域资源请求的一种最常用的方式。一般需要后端人员在处理请求的时候，添加允许跨域的相关操作：

### 0.2、post和get的区别
**总结说明:**

* HTTP报文层面：GET将请求信息放在URL，POST放在报文体中。
* 数据库层面：GET符合幂等性和安全性，POST不符合。
* 其它层面：GET可以被缓存、被存储，POST不行

**分别说明:**

* get用来获取数据，post用来提交数据
* get参数有长度限制（受限于url长度，具体的数值取决于浏览器和服务器的限制，最长2048字节），而post无限制。
* get请求的数据会附加在url之 ，以 " ？ "分割url和传输数据，多个参数用 "&"连接，而post请求会把请求的数据放在http请求体中。
* get是明文传输，post是放在请求体中，但是开发者可以通过抓包工具看到，也相当于是明文的。
* get请求会保存在浏览器历史记录中，还可能保存在web服务器的日志中

**幂等性:**

幂等通俗的来讲就是指同一个请求执行多次和仅执行一次的效果完全相等。这里来扯出幂等主要是为了处理同一个请求重复发送的情况，假如在请求响应之前失去连接，如果这个请求时幂等的，那么就可以放心的重发一次请求。所以可以得出get请求时幂等的，可以重复发送请求，post请求时不幂等的，重复请求可能会发生无法预知的后果。


### 0.3、否理解参数 arguments 对象？如何将他转化成为标准数组
通常方法是使用 Array.prototype.slice ，像这样：
```javascript
var args = Array.prototype.slice.call(arguments);
```

### 0.4、 如何判断当前脚本运行在浏览器还是 node 环境中？（阿里）
```javascript
this === window ? 'browser' : 'node';

//通过判断 Global 对象是否为 window，如果不为 window，当前脚本没有运行在浏览器中。
```
### 0.5、哪些操作会造成内存泄漏？

1. 意外的全局变量

2. 被遗忘的计时器或回调函数

3. 脱离 DOM 的引用

4. 闭包
::: tip 原因
第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。

第二种情况是我们设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留
在内存中，而无法被回收。

第三种情况是我们获取一个 DOM 元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回
收。

第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。
:::


### 1、new一个新实例的过程是怎样的？
1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
2. 属性和方法被加入到 this 引用的对象中。
3. 新创建的对象由 this 所引用，并且最后隐式的返回 this.

### 2、对闭包的看法，为什么要用闭包？说一下闭包的原理以及应用场景？

**闭包**: 闭包是指有权访问另一个函数作用域内变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以 访问到当前函数的局部变量。

可以在内部函数访问到外部函数作用域，使用闭包，一可以读取函数中的变量，二可以将函数中的变量存储在内存中，保护变量不被污染。正因闭包会把函数中的变量值存储在内存中，会对内存有消耗，所以不能滥用闭包，否则会影响性能，造成内存泄漏。当不需要使用闭包时，要及时释放内存，可将内层函数对象的变量赋值为null

**闭包原理**：利用了函数作用域链的特性，一个函数内部定义的函数会将包含外部函数的活动对象添加到他的作用域链中，函数执行完毕，其zhixing作用域链被销毁，但因内部函数的作用域链仍然在引用这个活动对象，所以其huodong对象不会被销毁，直到内部函数被销毁后才被销毁。

**应用场景**：模块封装，防止变量污染全局

### 3、Common.js, AMD, CMD以及ES6的模块的区别

**`Common.js`**：同步加载方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。在服务端，模块都存储在本地，读取速度非常快，所以这样不会有问题，但是在浏览器端，由于网络原因，更合理的方案是使用异步加载。

**`AMD`**:异步加载模块。它是一个在浏览器端模块化开发规范，所有依赖这个模块的语句，都定在个回调函数中，等到加载完成后，这个回调函数才会执行
::: tip require.js
使用require.js实现AMD规范的模块化：用require.configure指定引用路径，用define()定义模块，用require()加载模块。
Require.js主要解决的问题
* 文件可能有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器

* Js加载的时候浏览器会停止页面渲染，加载文件愈多，页面相应事件就越长，异步前置加载。

* require.js 的核心原理是通过动态创建 script 脚本来异步引入模块，然后对每个脚本的 load 事件进行监听，如果每个脚本都加载完成了，再调用回调函数。
:::

**`CMD`**:是另一种js模块化方案，他与AMD类似，不同点在于AMD推崇前置依赖、提前执行、CMD推崇依赖就近、延迟执行。

```javascript
//cmd
define(function(require, exports, module){
  var a = require('./a') //依赖可以就近书写
  a.doSth()
})
//amd
define(['./a'], function(){
  //依赖必须一开始就写好
  a.doSth()
})
```

**`ES6`**：在语言标准的层面上，实现了模块功能，而且实现的相当简单，Es6的模块不是对象，import命令会被js引擎静态分析，在编泽时就引入模块代码，也正因为这个，使得静态分析成为可能

::: tip ES6 模块与 CommonJS 模块、AMD、CMD 的差异。
* CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。CommonJS 模块输出的是值的，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令 import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。

* CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。CommonJS 模块就是对象，即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
:::


### 4、 JS事件循环怎么理解(微任务与宏任务)?

js代码执行过程中会有很多任务，这些任务总的分成两类：`同步任务`和`异步任务`

1. 首先js 是单线程运行的，在代码执行的时候，通过将不同函数的执行上下文压入执行栈中来保证代码的有序执行。

2. 在执行同步代码的时候，如果遇到了异步事件，js 引擎并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务

3. 当同步事件执行完毕后，再将异步事件对应的回调加入到与当前执行栈中不同的另一个任务队列中等待执行。

4. 任务队列可以分为`宏任务`对列和`微任务`对列，当当前执行栈中的事件执行完毕后，js 引擎首先会判断微任务对列中是否有任务可以执行，如果有就将微任务队首的事件压入栈中执行。

5.	当微任务对列中的任务都执行完成后再去判断宏任务对列中的任务。

**`宏任务`**：当前调用栈中执行的代码称为宏任务

**`微任务`**：当前宏任务执完(此次事件循环执行完),在下一个宏任务开始之前需要执行的任务，可以理解为回调事件

例如：
```javascript
setTimeout(function(){
  console.log(1)
},0)
new Promise(function(resolve,reject){
  console.log(2)
  resolve()
}).then(function(){
  console.log(3)
})
process.nextTick(function(){
  console.log(4)
})
console.log(5)
```
（第一轮：主线程开始执行，遇到setTimeout，将setTimeout的回调函数丢到宏任务队列中，在往下执行new Promise立即执行，输出2，then的回调函数丢到微任务队列中，再继续执行，遇到process.nextTick，同样将回调函数扔到为任务队列，再继续执行，输出5，当所有同步任务执行完成后看有没有可以执行的微任务，发现有then函数和nextTick两个微任务，先执行哪个呢？process.nextTick指定的异步任务总是发生在所有异步任务之前，因此先执行process.nextTick输出4然后执行then函数输出3，第一轮执行结束。第二轮：从宏任务队列开始，发现setTimeout回调，输出1执行完毕，因此结果是25431）


### 5、介绍下原型链

<img src="/images/interview/proto.jpg" style="zoom:50%;" />

每个对象都有一个指向它的原型(prototype)对象的内部链接。这个原型对象又有自己的原型，直到某个对象的原型为null为止(也就是不在有原型指向)

所有对象都有`__proto__`属性，该属性对应对象的原型

所有的函数对像都有`prototype`属性，该属性的值会被赋值给该函数创建对象的`__proto__`属性

所有的原型对象都有`constructor`属性，该属性对应创建所有指向该原型的实例的构造函数

函数对象和原型对象通过`prototype`和`constructor`属性进行相互关联

### 6、简单说一下Vue2.x响应式数据原理

Vue在初始化数据时，会使用`Object.defineProperty`重新定义data中的所有属性，当页面使用对应属性时，首先会进行依赖收集(收集当前组件的`watcher`)如果属性发生变化会通知相关依赖进行更新操作(`发布订阅`)。

### 7、那你知道Vue3.x响应式数据原理吗？

Vue3.x改用`Proxy`[ˈprɒksi] 替代Object.defineProperty。因为Proxy可以直接监听对象和数组的变化，并且有多达13种拦截方法。并且作为新标准将受到浏览器厂商重点持续的性能优化。

```
//Proxy只会代理对象的第一层，那么Vue3又是怎样处理这个问题的呢？
判断当前Reflect.get的返回值是否为Object，如果是则再通过`reactive`方法做代理， 这样就实现了深度观测。
//监测数组的时候可能触发多次get/set，那么如何防止触发多次呢？
我们可以判断key是否为当前被代理对象target自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行trigger。
```

### 8、说一下Vue的生命周期

`beforeCreate`是new Vue()之后触发的第一个钩子，在当前阶段data、methods、computed以及watch上的数据和方法都不能被访问。

`created`在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发updated函数。可以做一些初始数据的获取，在当前阶段无法与Dom进行交互，如果非要想，可以通过vm.$nextTick来访问Dom。

`beforeMount`发生在挂载之前，在这之前template模板已导入渲染函数编译。而当前阶段虚拟Dom已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发updated。

`mounted`在挂载完成后发生，在当前阶段，真实的Dom挂载完毕，数据完成双向绑定，可以访问到Dom节点，使用$refs属性对Dom进行操作。

`beforeUpdate`发生在更新之前，也就是响应式数据发生更新，虚拟dom重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。

`updated`发生在更新完成之后，当前阶段组件Dom已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。

`beforeDestroy`发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。

`destroyed`发生在实例销毁之后，这个时候只剩下了dom空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。

### 9、Computed和Watch

`Computed`本质是一个具备缓存的watcher，依赖的属性发生变化就会更新视图。 适用于计算比较消耗性能的计算场景。当表达式过于复杂时，在模板中放入过多逻辑会让模板难以维护，可以将复杂的逻辑放入计算属性中处理。

`Watch`没有缓存性，更多的是观察的作用，可以监听某些数据执行回调。当我们需要深度监听对象中的属性时，可以打开`deep：true`选项，这样便会对对象中的每一项进行监听。这样会带来性能问题，优化的话可以使用`字符串形式`监听，如果没有写到组件中，不要忘记使用`unWatch手动注销`。

### 10、v-model是如何实现的，语法糖实际是什么？

语法糖：指计算机语言中添加某种语法,这种语法对语言的功能并没有影响,但是更方便程序员使用,通常来说，语法糖能够增加程序可读性，从而减少代码出错机会，可以简单她理解为，加糖后的代码编译后跟加糖前一样，代码更简洁，语义更自然

实现原理：

* 作用在普通表单元素上

动去绑定了input的value指向了message变量，且触发input事牛的时候动态把message设置为目标值

```javascript
<input v-model="sth">
//等同于
<input v-bind:value="message" v-on:input="message=$event.target.value"/>
```

* 作用在组件上

在自定义组件中，v-model默认会利用名为value的prop和名为input的事件,本质上是一个父子组件通信的语法糖，通过prop和$.emit实现,因此父组件`v-model`语法糖本质上可以修改为

```javascript
<child :value="message" @input="e=>message=e" />
```

在组件的实现中，我们是可以通过v-model属性来配置子组件接收的prop名称以及派发的事件名称

 ```javascript
//父组建
<aa-input v-model="aa"></aa-input>
//等价于
<aa-input v-bind:value="aa" v-on:input="aa=$event.target.value"></aa-input>

//子组建
<input v-bind:value="aa" v-on:input="onmessage">
props:{ value : aa}
methods:{
	onmessage(e){
		this.$emit('input',e.target.value)
	}
}
 ```

默认情况下，一个组建上的v-model会把value用作prop，并且把input用作event

### 11、简单的说一下对`MVVM`的理解

`MVVM` 是 `Model-View-ViewModel` 的缩写。
`Model`代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。
`View` 代表UI 组件，它负责将数据模型转化成UI 展现出来。
`ViewModel` 监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View 和 Model的对象，连接Model和View。
在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。
`ViewModel` 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

<img src="/images/interview/mvvm.png" alt="image-20201008183850853" style="zoom:20%;" />

### 12、`$route`和`$router`的区别

`$route`是“路由信息对象”，包括path，params，hash，query，fullPath，matched，name等路由信息参数。

`$router`是“路由实例”对象包括了路由的跳转方法，钩子函数等。

### 12.0、vue的全局守卫
1. 你可以使用 `router.beforeEach` 注册一个全局前置守卫：
```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
//to: Route: 即将要进入的目标 路由对象
//from: Route: 当前导航正要离开的路由
//next: Function: 一定要调用该方法来 resolve 这个钩子。
```

### 12.0、子组建如何向父组建传值，sync修饰符是干什么的，原理是什么？

### 12.1、`sync`修饰符
在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以变更父组件，且在父组件和子组件都没有明显的变更来源。

这也是为什么我们推荐以 update:myPropName 的模式触发事件取而代之。举个例子，在一个包含 title prop 的假设的组件中，我们可以用以下方法表达对其赋新值的意图：
```js
this.$emit('update:title', newTitle)
```
然后父组件可以监听那个事件并根据需要更新一个本地的数据 property。例如：
```html
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
```
为了方便起见，我们为这种模式提供一个缩写，即 .sync 修饰符：
```html
<text-document v-bind:title.sync="doc.title"></text-document>
```
### 12.2、计算属性缓存 vs 方法
```html
<p>Reversed message: "{{ reversedMessage() }}"</p>
```
```js
// 在组件中
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```

我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

这也同样意味着下面的计算属性将不再更新，因为 Date.now() 不是响应式依赖：
```js
computed: {
  now: function () {
    return Date.now()
  }
}
```
相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。

我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 A。如果没有缓存，我们将不可避免的多次执行 A 的 getter！如果你不希望有缓存，请用方法来替代。
### 12.3、vuex有哪几种属性？为什么修改state的数据必须要提交一个`mutation`呢
分别是 State、 Getter、Mutation 、Action、 Module

我们通过提交 mutation 的方式，而非直接改变 store.state.count，是因为我们想要更明确地追踪到状态的变化。这个简单的约定能够让你的意图更加明显，这样你在阅读代码的时候能更容易地解读应用内部的状态改变。此外，这样也让我们有机会去实现一些能记录每次状态改变，保存状态快照的调试工具。有了它，我们甚至可以实现如时间穿梭般的调试体验。


### 13、SSR了解吗？

SSR也就是服务端渲染，`也就是将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把html直接返回给客户端`。

SSR有着更好的SEO、并且首屏加载速度更快等优点。不过它也有一些缺点，比如我们的开发条件会受到限制，服务器端渲染只支持`beforeCreate`和`created`两个钩子，当我们需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境。还有就是服务器会有更大的负载需求。

### 14、前端安全

(1) `XSS`（Cross Site Scripting）跨站脚本攻击

* 原理：页面渲染的数据中包含可运行的脚本

* 攻击的基本类型：**反射型**（url参数直接注入）和**存储型**（存储到DB后读取时注入）

* 注入点：HTML节点内的内容（text）；HTML中DOM元素的属性；Javascript代码；富文本

  

  ```
  //HTML节点内容注入
  <div><script>alert(1);</script></div>  
  
  //DOM属性注入
  <img src='/images/1.png' onerror='alert(1);'>  
  
  //javascript代码
  <script>var a = '1';alert(1);</script>
  
  //富文本是html标签，文字，以及样式的集合，很容易实现HTML节点内容注入和DOM属性注入，有被攻击的风险
  ```

（2）`CSRF`（Cross Site Request Forgy）跨站请求伪造

原理：在第三方网站向本网站发起请求（如图）

<img src="/images/interview/csrf.png" style="zoom:50%;" />

* 用户在a站前端页面发起登录（身份认证）请求

* a站后端确认身份，登录成功，cookie中存在用户的身份认证信息

* b站前端页面向a站后端发起请求，带着a站的cookie信息（身份认证信息），请求成功

综上，可以清楚的知道，只要用户访问了b站的前端页面，b站就可以在用户完全不知道的情况下，带着a站的用户登录态（cookie）向a站发起请求

（3）点击劫持

原理：第三方网站通过iframe内嵌某一个网站，并且将iframe设置为透明不可见，将其覆盖在其他经过伪装的DOM上，伪装的可点击DOM（按钮等）与实际内嵌网站的可点击DOM位置相同，当用户点击伪装的DOM时，实际上点击的是iframe中内嵌的网页的DOM从而触发请求操作

特点：用户自己做了点击操作；用户毫不知情；

**防御**

(1)	`XSS`攻击防御

* 浏览器自带防御机制，主要应对反射型攻击（HTML内容或属性）：http响应头中自动添加x-xss-protection，值为0（关闭），1（打开），默认打开

* 对特定字符做转义：内容注入替换尖括号（ < => &lt;  > => &gt; ） 属性注入替换单引号或双引号（ " => &quot; ' => &#39; ）

* CSP（Content Security Policy）内容安全策略：用于指定哪些内容可执行

```
//我们可以在http响应头中设置Content-Security-Policy
//图片可以从任何地方加载(注意 "*" 通配符)
//多媒体文件仅允许从 media1.com 和 media2.com 加载(不允许从这些站点的子域名)
//可运行脚本仅允许来自于userscripts.example.com
Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com

//同时meta中也支持设置Content-Security-Policy
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">

```

(2)	`CSRF`攻击防御：

CSRF的发生有几个特点，b站发送的请求带着a站的cookie信息； b站发送请求不经过a站的前端；http请求头中的referer为b站。我们可以从这些特点入手，思考防御的办法

* 禁止第三方网站携带本网站的cookie信息：设置same-site属性，same-site属性有两个值，Strict（**所有的第三方请求都不能携带**本网站的cookie）和Lax（链接可以，但是**form表单提交和ajax请求不行**）

* 本网站前端页面添加验证信息：使用**验证码**或者添加**token验证**

::: tip token验证
a站前端将token存在当前页面中（比如表单中的input隐藏域，meta标签或者任何一个dom的属性）和cookie中，当请求a站后端的时候，参数中带上这个token字段，a站后端将参数中的token和cookie中的token做对比， 相同则验证通过，不同则请求不合法
:::

* referer验证：禁止来自第三方的请求

* 使用post请求：有一个说法是“post请求比get请求更安全”，那这种说法对不对呢？实际上这种说法并不准确，对于CSRF攻击来讲，不管是post还是get都能实现攻击，区别只是post请求攻击方需要构造一个form表单才可以发起请求，比get请求（img的src， a标签的href等等）的攻击方式复杂了一些，但是并不能有效的阻止攻击。

(3)	点击劫持攻击防御

* Javascript禁止内嵌：当网页没有被使用iframe内嵌时，top和window是相等的；当网页被内嵌时，top和window是不相等的；

* 设置http响应头 X-Frame-Options：有三个值

   `DENY`（禁止内嵌）

  `SAMEORIGIN`（只允许同域名页面内嵌）

  `ALLOW-FROM`（指定可以内嵌的地址）

  

### 15、性能优化

(1)	从输入URL到页面加载完成的过程：
* 首先通过DNS（域名解析）把URL解析为对应的IP地址 (DNS解析)
* 然后与该IP地址确定的服务器建立起TCP网络连接 (TCP连接)
* 随后向服务器发送HTTP请求 (HTTP请求)
* 服务器处理完HTTP请求后把目标数据放在HTTP响应里面呈现给客户端 (服务端处理，HTTP响应返回)
* 浏览器拿到目标数据的后开始渲染把页面呈现给用户，并且时时等待响应用户的操作 (拿到目标数据，解析数据并渲染结果，向用户展示结果)
::: tip 潜在的性能优化点
- dns缓存
- 减少http请求
- 减小http请求的大小
- 网络请求的时候走最近的网络请求
- 浏览器端缓存
:::

(2)	一个网站在浏览器端是如何进行渲染的？

<img src="/images/interview/domRender.png" alt="img" style="zoom:50%;" />

请求返回一段HTML文档，这一段HTML文档会被浏览器中的HTML parse 这一个解析器进行解析，通过词法分析的过程将tag分析为token，依次从html文档中从上到下去解析token，因为他是用next token的方式不断的从上到下进行解析的，在词法分析的过程中是可以相应的解析出link script这样的标签，这样的标签里面所对应的web资源会进一步的由浏览器向网络发起请求。请求回来的JavaScript web资源会交给浏览器中的v8 JavaScript执行引擎去执行。css相关的资源请求回来之后会由浏览器生成相应的CSSOM树。页面渲染的前提是DOM树和CSSOM树都有了之后，去生成Render tree，进一步进行一个布局，从而进行绘制。

**总结** 从上面的两个问题我们可以看出前端性能优化的基础优化的核心就是减少http请求和减小http请求的大小。

(3)	一般优化

* HTML优化 （压缩包括空格，制表符，换行符等，还有一些其他意义的字符，如HTML注释也可以被压缩）

* CSS优化 （无效代码删除、空格删除、制表符删除）

* JS优化 （无效字符的删除、剔除注释、代码语义的缩减和优化、代码保护）

* 图片优化

  ```
  jpg 有损压缩 压缩率高 不支持透明
  png 支持透明 浏览器兼容性好
  webp 压缩程度更好 在iOS webview有兼容性问题
  SVG 矢量图 图片样式相对简单的场景
  
  优化方案
  1、Image Inline（减少http请求的数量）
  2、雪碧图（减少http请求的数量）
  ```

* 文件合并优化

  ```
  1、首屏渲染问题（多个文件合并导致一个http请求过大，请求时间过长）
  2、缓存失效问题（合并后任何一个文件的修改都会导致缓存失效）
  //解决方法
  1、公共库合并
  2、不同页面的合并
  
  ```

（4）进阶优化

* 文件懒加载与预加载

* 重绘与回流 （CSS和JavaScript会相互阻塞）

  ```
  1、回流：尺寸、布局、隐藏等改变需要重新构建，就称为回流。
  触发回流的因素：
  		盒子模型相关属性、定位及浮动相关属性、节点内部文字结构
  2、重绘：外观、风格改变而不影响布局需要重绘
  ```

（5）浏览器缓存 （cookie, localstorage, sessionstorage, service workers）

（6）缓存（cache-control, expires, last-modify, stag）

* 浏览器在加载资源时，根据请求头的expires和cache-control判断是否命中强缓存，是则直接从缓存读取资源，不会发请求到服务器

* 如果没有命中强缓存，浏览器一定会发送一个请求到服务器，通过last-modified和etag验证资源是否命中协商缓存，如果命中，服务器会将这个请求返回，但是不会返回这个资源的数据，依然是从缓存中读取资源
* 如果前面两者都没有命中，直接从服务器加载资源

1. Expires和Cache-Control **强缓存**

::: tip Expires

它描述的是一个绝对时间，由服务器返回。浏览器进行第一次请求时，服务器会在返回头部加上Expires，下次请求，如果在这个时间之前则命中缓存

注：Expires 受限于本地时间，如果修改了本地时间，可能会造成缓存失效
:::

::: tip Cache-Control
表示的是相对时间，该值是利用max-age判断缓存的生命周期，是以秒为单位，如何在生命周期时间内，则命中缓存，优先级高于 Expires
:::
2. Last-Modified/If-Modified-Since 和 ETag/If-None-Match 协商缓存

很显然，协商缓存，字面意思就是和服务器协商一下，看是否需要缓存

::: tip Last-Modified/If-Modified-Since

Last-Modified 表示本地文件最后修改日期，浏览器会在请求 header加上If-Modified-Since（上次返回的Last-Modified的值），询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来
:::

::: tip ETag/If-None-Match

Etag就像一个指纹，资源变化都会导致ETag变化，跟最后修改时间没有关系，ETag可以保证每一个资源是唯一的 If-None-Match的header会将上次返回的Etag发送给服务器，询问该资源的Etag是否有更新，有变动就会发送新的资源回来
:::

注：Etag优先级是高于Last-Modifed的，所以服务器会优先验证Etag 具体为什么要用ETag，主要出于下面几种情况考虑：

* 一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新获取；
* 某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，If-Modified-Since能检查到的粒度是s级的，这种修改无法判断(或者说UNIX记录MTIME只能精确到秒)；
* 某些服务器不能精确的得到文件的最后修改时间。

### 16、webpack中hash、chunkhash和contenthash三者的区别
**hash**
hash是跟整个项目的构建相关，构建生成的文件hash值都是一样的，所以hash计算是跟整个项目的构建相关，同一次构建过程中生成的hash都是一样的，只要项目里有文件更改，整个项目构建的hash值都会更改。

如果出口是hash，那么一旦针对项目中任何一个文件的修改，都会构建整个项目，重新获取hash值，缓存的目的将失效。

**chunkhash**
chunkhash和hash不一样，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的hash值。我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成hash值，那么只要我们不改动公共库的代码，就可以保证其hash值不会受影响。

**contenthash**
生产环境中我们会用webpack的插件，将css代码打单独提取出来打包。这时候chunkhash的方式就不够灵活，因为只要同一个chunk里面的js修改后，css的chunk的hash也会跟随着改动。因此我们需要contenthash。

contenthash表示由文件内容产生的hash值，内容不同产生的contenthash值也不一样。在项目中，通常做法是把项目中css都抽离出对应的css文件来加以引用。

### ES6 模块与 CommonJS 模块的差异
它们有三个重大差异。

* CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

* CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

* CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。

第二个差异是因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

::: tip 注意
require和import不会循环引用, 因为模块执行后会把导出的值缓存，下次再require或者import不会再次执行
:::

下面重点解释第一个差异。

CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。请看下面这个模块文件lib.js的例子。
```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};
```
上面代码输出内部变量counter和改写这个变量的内部方法incCounter。然后，在main.js里面加载这个模块。
```js
// main.js
var mod = require('./lib');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
```
上面代码说明，lib.js模块加载以后，它的内部变化就影响不到输出的mod.counter了。这是因为mod.counter是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。
```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  get counter() {
    return counter
  },
  incCounter: incCounter,
};
```
上面代码中，输出的counter属性实际上是一个取值器函数。现在再执行main.js，就可以正确读取内部变量counter的变动了。
```
$ node main.js
3
4
```
ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的import有点像 Unix 系统的“符号连接”，原始值变了，import加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

还是举上面的例子。
```js
// lib.js
export let counter = 3;
export function incCounter() {
  counter++;
}

// main.js
import { counter, incCounter } from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4
```
上面代码说明，ES6 模块输入的变量counter是活的，完全反应其所在模块lib.js内部的变化。。