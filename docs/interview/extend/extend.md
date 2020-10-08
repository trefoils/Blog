# 2020面试题
## 一、CSS

### 1、介绍一个标准盒模型？`Border-box`和`content-box`的区别？

CSS中盒模型有两种，w3c标准盒模型和ie盒模型，相同之处是都是对web中元素计算尺寸的模型，不同之处在于两者的计算方式不同

### 2、`flex`布局，如何把8个元素分两行摆放？

包裹元素

```js
Flex-flow: row wrap
Align-content: flex-start
```

被包裹元素

```javascript
Flex:0 0 25%
```

`Flex`属性是`flex-grow`,` flex-shrink`, `flex-basis`的简写，默认值为`0，1，auto`

`Flex-grow: 0`默认不放大

`Flex-shrink: 0`不缩小

`Flex-basis: auto`项目占据主轴的空间

### 3、BFC是什么？触发BFC的条件是什么？有哪些应用场景？

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

 

## 二、Js

### 1、new一个新实例的过程是怎样的？
1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
2. 属性和方法被加入到 this 引用的对象中。
3. 新创建的对象由 this 所引用，并且最后隐式的返回 this.

### 2、对闭包的看法，为什么要用闭包？说一下闭包的原理以及应用场景？

**闭包**: 函数执行后返回结果是一个内部函数，并被外部变量所引用，如果内部函数持有被执行函数作用域de变量，即形成了闭包。

可以在内部函数访问到外部函数作用域，使用闭包，一可以读取函数中的变量，二可以将函数中的变量存储在内存中，保护变量不被污染。正因闭包会把函数中的变量值存储在内存中，会对内存有消耗，所以不能滥用闭包，否则会影响性能，造成内存泄漏。当不需要使用闭包时，要及时释放内存，可将内层函数对象的变量赋值为null

**闭包原理**：利用了函数作用域链的特性，一个函数内部定义的函数会将包含外部函数的活动对象添加到他的作用域链中，函数执行完毕，其zhixing作用域链被销毁，但因内部函数的作用域链仍然在引用这个活动对象，所以其huodong对象不会被销毁，直到内部函数被销毁后才被销毁。

**应用场景**：模块封装，防止变量污染全局

### 3、Common.js, AMD, CMD以及ES6的模块的区别

**`Common.js`**：同步加载方案，在服务端，模块都存储在本地，读取速度非常快，所以这样不会有问题，但是在浏览器端，由于网络原因，更合理的方案是使用异步加载。

`Common.js`的特点

* 一个文件就是一个模块，拥有单独地作用域

* 普通方式定义的变量，函数，对象都属于该模块内

* 通过require来加载模块，通过exports和module.exports来baolu模块中的内容

* 当exports和module.exports同时存在时，module.exports会覆盖exports

* exports就是module.exports的子集

**`ES6`**：在语言标准的层面上，实现了模块功能，而且实现的相当简单，Es6的模块不是对象，import命令会被js引擎静态分析，在编泽时就引入模块代码，也正因为这个，使得静态分析成为可能

**`AMD`**:异步加载模块。它是一个在浏览器端模块化开发规范，所有依赖这个模块的语句，都定在个回调函数中，等到加载完成后，这个回调函数才会执行
::: tip require.js
使用require.js实现AMD规范的模块化：用require.configure指定引用路径，用define()定义模块，用require()加载模块。
Require.js主要解决的问题
* 文件可能有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器
* Js加载的时候浏览器会停止页面渲染，加载文件愈多，页面相应事件就越长，异步前置加载。
:::

**`CMD`**:是另一种js模块化方案，他与AMD类似，不同点在于AMD推崇前置依赖、提前执行、CMD打崇依赖就近、延迟执行。

因为CMD推崇一个文件一个模块，所以经常用文件名作为模块id;CMD打推崇依赖就近，所以一般不在define的参数中写依赖

### 4、微任务与宏任务

**`宏任务`**：当前调用栈中执行的代码称为宏任务

**`微任务`**：当前宏任务执完(此次事件循环执行完),在下一个宏任务开始之前需要执行的任务，可以理解为回调事件

`宏任务`的事件放在`callback queue`中，由事件触发线程维护;微任务的事件放在微任务队列中，由`js引擎线程`维护

在挂起任务时， js引擎将所有任务按照类别分到这两个队伍中，首先在Macrotask的队列中取出第一个任务，执行完毕后取出microtask队列中的所有任务，按顺序执行;之后再取microtask任务，周而复始，直至两个队列的任务都取完。

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

 