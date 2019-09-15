#CSS 知识总结
###1.浏览器渲染原理

1.DOM 树与 CSSOM 树合并后形成渲染树。  
2.渲染树只包含渲染网页所需的节点。  
3.布局计算每个对象的精确位置和大小。  
4.最后一步是绘制，使用最终渲染树将像素渲染到屏幕上  

可以通过浏览器的控制台的Rendering下的Paint flashing 观察页面元素的渲染

###2.CSS 动画的两种做法（transition 和 animation）
```css
.div{
    position: absolute;
    top: 260px;
    left:10px;
    width: 200px;
    height: 200px;
    background-color: red;
    transition: all 2s ease;
}
.div:hover{
    background-color: blue;
    transform: rotate(45deg);
    left: 400px;
}
```
 transition现过渡动画：
 1.指定要添加过渡效果的CSS属性(或者"all");  
 2.指定过渡效果的持续时间。
 
ransition才是实现过渡动画的关键，transform只是一个css转换属性


```css
@keyframes move{
    100%{
        left: 300px;
        background-color: blue;
        transform: rotate(45deg);
    }
}
.div{
    position: absolute;
    top: 60px;
    left:10px;
    width: 200px;
    height: 200px;
    background-color: red;
}
.div{
    animation: move 2s;
    animation-fill-mode: forwards;
}

```

animation现过渡动画：  
1.用@keyframes定义规则，并绑定到一个选择器上。  
2.规定动画的名称(animation-name),规定动画的时长(animation-duration)。

css没有太多的道理可言需要通过MDN查询和多练习。



