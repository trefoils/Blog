# Css

## 两种盒模型分别说一下

1. **W3C的标准盒模型(标准盒子模型)**

在标准的盒子模型中，width指content部分的宽度

2. **IE盒模型**

在IE盒子模型中，width表示content+padding+border这三个部分的宽度

## Flex怎么用，常用的属性有哪些

使用了 display: flex 后会形成一个容器盒子。

**`justify-content：items` 在主轴上的对齐方式**
* `center`：居中对齐
* `flex-start`：对齐主轴起始端
* `flex-end`：与 flex-start 相反
* `space-between`：两端对齐，items中间间隔相等
* `space-around`：和 space-between 类似，但是每个 item 两侧间隔相等

**`align-items：items` 在交叉轴（即与主轴垂直的方向）上的对齐方式**
* `center`：居中对齐
* `flex-start`：对齐交叉轴起始端
* `flex-end`：与 flex-start 相反
* `baseline`：以每个 item 的第一行文字的基线对齐
* `stretch`：默认，若 items 没有设置 height 或设置为auto，则撑满容器

**`flex-direction:items` 设置主轴，items 在主轴上的排列方向**
* `row`：默认，水平方向，从左开始
* `row-reverse`：水平方向，从右开始
* `column`：垂直方向，从上开始
* `column-reverse`：垂直方向，从下开始

**`flex-wrap:items`：换行，items 在主轴方向上是否换行**
* `nowrap`：默认，不换行
* `wrap`：换行
* `wrap-reverse`：换行（反向）

**属性、值**

* `order`：定义当前 item 在整个items 里的顺序位置，值越小排在越前，可接受负数
* `flex-grow`：放大比例，默认为0
* `flex-shrink`：缩小比例，默认为1，设为0表示不缩小
* `flex-basis`：在分配剩余空间之前，设置 item 占据的主轴空间，默认为auto，表示 item 原始大小

## BFC是什么，什么属性可以触发BFC？

BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

在解释什么是BFC之前，我们需要先知道Box、Formatting Context的概念。

**1. Box：css布局的基本单位**

Box 是 CSS 布局的对象和基本单位， 直观点来说，就是一个页面是由很多个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。 不同类型的 Box， 会参与不同的 Formatting Context（一个决定如何渲染文档的容器），因此Box内的元素会以不同的方式渲染。让我们看看有哪些盒子：

* `block-level box`: display 属性为 block, list-item, table 的元素，会生成 block-level box。并且参与 block fomatting context；
* `inline-level box`: display 属性为 inline, inline-block, inline-table 的元素，会生成 inline-level box。并且参与 inline formatting context；

**2. Formatting Context**
Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)。

::: tip BFC
BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。
:::

**3. BFC的布局规则**
* 内部的Box会在垂直方向，一个接一个地放置。
* Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。
* 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
* BFC的区域不会与float box重叠。
* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
* 计算BFC的高度时，浮动元素也参与计算。

**4. 如何创建BFC**
* float的值不是none。
* position的值不是static或者relative。
* display的值是inline-block、table-cell、flex、table-caption或者inline-flex
* overflow的值不是visible

**5. BFC的作用**
* 利用BFC避免margin重叠。
* 清楚浮动

## CSS选择器的优先级

* `！important` 特殊性最高
* 对于`内联样式`，权重`1000`
* `ID选择器`，权重`100`
* `类选择器`,`伪类`，权重`10`
* `元素选择器`，`伪元素`，权重`1`.
* `通配符选择器`，权重`0`

## 如何垂直居中

有很多种方法