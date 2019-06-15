### HTML 常用的标签
#### DOCTYPE
DOCTYPE指的是文档声明，比如这里是HTML5的文档声明，表示我这个是一个HTML5的文件。

#### html标签
html标签是网页的根标签，一个页面中有且只有一个根标签，网页中的所有内容都应该写在hmtl标签的内部

#### head标签
head是网页的头部，该标签用于帮助浏览器解析页面，该标签中的内容不会在网页中直接显示，它里边可以包含一些子标签，如meta、title、link、style、script、base等

#### meta标签
用于描述网页的头信息，比如：<meta charset="utf-8"/>，是用来描述网页的字符编码，也就是告诉浏览器，你要用"utf-8"来解析我

#### title标签
用来设置网页的标题，默认会在浏览器的标题栏中显示，搜索引擎在检索网页时，会主要检索title中的内容，它会影响到页面在搜索引擎中的排名

#### body标签
body标签中的所有内容都会在网页中显示，不同的标签会有它们自己的默认显示样式

#### 标题标签（h1 ~ h6）
html中一共有六级标题，重要性分别从h1到h6依次递减

#### 段落标签 （p）
用来描述一个段落

#### 换行标签（br）
换行

#### 水平线标签（hr）
hr标签用来画一条水平线，来分割网页中的内容

#### 链接标签（a）
href="//xxx.com"时，表示无协议，自动继承当前的协议。

href="#"(哈希标记),<a href="#">返回顶部</a> 返回顶部
href="#attr",当某一元素的id的值为attr，点击点击返回元素id为attr所在的区域。

javascript:; 点击链接的时候不会有任何反应

target：_blank  _top _self _paren 在不同的窗口打开链接

#### iframe 标签（iframe ）
iframe标签是用来在一个网页中嵌入另一个网页

可以指定iframe的name，然后a的target指定这个iframe
```javascript
<iframe name="xxx" src="#" frameborder="0"></iframe>
<a href="https://www.baidu.com" target="xxx">click me </a>
```

#### 表格标签（table、th、tr、td）
tr：表示行，这里有4对tr（<tr></tr>），也就是有4行；

th：表示作为标题的单元格，默认会加粗居中显示；

td：表示作为普通的单元格；

caption：表格的标题，默认加粗居中显示；

summary：是table标签的一个属性，是对表格的描述；

另外，像align、border、cellspacing、cellpadding、width、height等等这些控制样式的属性，不建议写到标签中，我们可以用css来控制它们的属性

#### 表单元素（input）
text password radio checkbox submit button等

type="radio" 单选按钮
同一组单选框按钮的name属性的值相同；且必须使用 value 属性定义此控件被提交时的值

type="submit" 提交数据

##### form
action：当前数据提供给后端服务器的地址或是后端接口

method：    post      get

post：HTTP post方法；表单数据会包含在表单体内然后发送给服务器.

get：HTTP get方法；表单数据会附加在 action 属性的URI中，并以 '?'作为分隔符, 然后这样得到的 URI 再发送给服务器.


