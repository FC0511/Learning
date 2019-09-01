## a 标签的用法
-**属性 1：href(hyper reference) 超级引用**   
取值：网址（https://xx.com, http://xx.com, //xx.com）  
**++//xx.com++ 继承当前页面http/https**

1.路径: /a/b/c 根目录, http启动的话就是服务器的根目录。 a/b 相对路径，等于 ./a/b

2.伪协议：
```
<a href="javascript:alert(1);">xxx</a>

<a href="javascript:;">xxx</a>//没有动作

<a href="mailto:m.bluth@example.com">Email</a>//邮件

<a href="mailto:m.bluth@example.com">Email</a>//邮件

<a href="#">xxx</a>//回到页面顶部
```
-**属性 2：target（决定跳转的链接在哪里打开）**

1._self 当前页面打开

2._blank 新窗口打开

3._top 顶级窗口打开

4._parent 上一次打开 iframe

特殊：

```
<a href="//baidu.com" target="xxx">123</a>
打开新窗口 且window.name = xxx;

<a href="//baidu.com" target="yyy">456</a>
<iframe src="" name="yyy"></iframe>
在指定的iframe内打开
```
## table 标签的用法

```
<style>
    table {
        border-spacing: 0;
        border-collapse: collapse;
    }
</style>
<table>
    <thead>
    <tr> <!--table row-->
        <th></th>
        <th>AA</th>
        <th>BB</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <th>CC</th>
            <td>11</td>
            <td>22</td>
        </tr>
        <tr>
            <th>DD</th>
            <td>11</td>
            <td>22</td>
        </tr>
    </tbody>
    <tfoot>
        <th>++</th>
        <td>1111</td>
        <td>2222</td>
    </tfoot>
</table>
```

## img 标签的用法

- 作用 

发出get请求，展示一张图片

- 属性

1：alt(图片加载失败的时的提示文字)

2：src(source)(图片路径)

3：height(高度)

4：width(宽度)

- 事件

onload/onerror

- 响应式 max-width: 100%;

## form 标签的用法
action 提交到哪个页面

method 提交的方式 get/post

autocomplete on/off 自动填充

target 提交到哪个页面

button 不写type="submit" 的话默认加上 

事件： onsubmit

## input 标签的用法
text password radio checkbox submit button等

type="radio" 单选按钮
同一组单选框按钮的name属性的值相同；且必须使用 value 属性定义此控件被提交时的值

事件：  onchange onfocus onblur