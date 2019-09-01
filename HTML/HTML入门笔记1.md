#### HTML是由由蒂姆·伯纳斯-李于1991年发明的  

####  HTML 起手式 -----Emmet 感叹号
```
<!DOCTYPE html> //声明文档类型为html,而不是svg/xml
<html lang="zh-CN"> //声明语言类型，翻译参考
  <head>
    <meta charset="UTF-8" /> //文件的字符编码
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> //兼容手机
    <meta http-equiv="X-UA-Compatible" content="ie=edge" /> //告诉IE使用最新内核
    <title>Document</title> //网页标题
  </head>
  <body></body>
</html>
```

#### 章节标签
- 标题 h1~h6 
- 章节 section
- 文章 article
- 段落 p
- 头部 header 
- 脚部 footer
- 主要内容 main
- 旁支内容 aside
- 划分 div

#### 全局属性
- 所有标签都有的属性

- class (引用 css 以.开头的样式)
- contenteditable(在浏览器可以编辑)
- hidden(隐藏)
- id
- style(内联样式)
- tabindex(增加用户体验多元化) 可以取 1 2 0 -1 ，tab、 shift tab 切换, -1 永远不访问)
- title(增加可读性)

#### 内容标签
- ol + li (ordered list + list item)有序的列表
- ul + li (unordered list + list item)无序的列表 
- dl + dt + dd (description list + term + data)包含术语定义以及描述的列表 
- pre (preview 的缩写) html 回车缩成一个空格 tab 缩成一个空格 多个空格缩成一个空格 保留用 pre 标签包裹
- hr 水平线
- br (break 的缩写)回车
- a (anchor 的缩写) 用作跳转其他页面
- em (emphasis 的缩写)表达对文本内容的强调
- storng表示强调带有着重意味
- code代码标签
- q (quote 的缩写)引用
- blockquote独自占一行块引用