# Html

## 你是如何理解HTML语义化的？

* HTML语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
* 在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的；
* 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于SEO。
* 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

## Meta viewport是做什么的，怎么写？

为了使移动端的页面在不同的手机上同样的大小来显示，我们可以将页面的宽度固定，然后获取设备的宽度，可以得到我们之前设定的宽度与设备宽度的比例，再使用HTML5新增的viewport来对页面进行缩放，并固定不允许用户再重新缩放。

[详细请参考](https://blog.csdn.net/Liuqz2009/article/details/89500080)

```
<meta name="viewport" 
    content="width=device-width, 
    initial-scale=1.0, 
    maximum-scale=1.0,
    minimum-scale=1.0,
    user-scalable=0" />
```
* `width`设置layout viewport 的宽度，为一个正整数，使用字符串”width-device”表示设备宽度
* `initial-scale`设置页面的初始缩放值，为一个数字，可以带小数
* `minimum-scale`允许用户的最小缩放值，为一个数字，可以带小数
* `height`设置layout viewport 的高度，这个属性对我们并不重要，很少使用
* `user-scalable`是否允许用户进行缩放，值为”no”或”yes”, no 代表不允许，yes代表允许
* `target-densitydpi`值可以为一个数值或 high-dpi 、 medium-dpi、 low-dpi、 device-dpi 这几个字符串中的一个

## HTML 和 XHTML 有什么区别？
为了规范HTML，W3C结合XML制定了XHTML 1.0标准，这个标准没有增加任何新的tag，只是按照XML的要求来规范HTML。
* XHTML中的标签都必须被正确地嵌套,HTML中的某些标签可以彼此不正确的嵌套。
* XHTML中的所有标签必须要关闭。
* XHTML中规范定义：标签名和属性对大小写敏感,所有XHTML标签名必须用小写字母。
* XHTML文档必须拥有根元素。
* XHTML中标签的属性值要使用双引号.
