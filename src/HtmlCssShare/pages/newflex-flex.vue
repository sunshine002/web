<style>
h1 {
    font: bold 20px/1.5 georgia, simsun, sans-serif;
}

.box-new-wrap {
    display: -webkit-flex;
    display: flex;
    width: 400px;
    height: 100px;
    margin: 10px 0 0;
    padding: 0;
    border-radius: 5px;
    list-style: none;
    background-color: #eee;
}

.box-new-wrap li {
    background: #aaa;
    text-align: center;
}

.box-new-wrap li:nth-child(1) {
    background: #999;
}

.box-new-wrap li:nth-child(2) {
    background: #aaa;
}

.box-new-wrap li:nth-child(3) {
    background: #ccc;
}

#box-new-wrap li:nth-child(1) {
    -webkit-flex: 1;
    flex: 1;
}

#box-new-wrap li:nth-child(2) {
    -webkit-flex: 1;
    flex: 1;
}

#box-new-wrap li:nth-child(3) {
    -webkit-flex: 1;
    flex: 1;
}

#box-new-wrap2 li:nth-child(1) {
    -webkit-flex: 1 0 100px;
    flex: 1 0 100px;
}

#box-new-wrap2 li:nth-child(2) {
    -webkit-flex: 2 0 100px;
    flex: 2 0 100px;
}

#box-new-wrap2 li:nth-child(3) {
    -webkit-flex: 3 0 100px;
    flex: 3 0 100px;
}

#box-new-wrap3 li:nth-child(1) {
    -webkit-flex: 1 1 400px;
    flex: 1 1 400px;
}

#box-new-wrap3 li:nth-child(2) {
    -webkit-flex: 1 2 400px;
    flex: 1 2 400px;
}

#box-new-wrap3 li:nth-child(3) {
    -webkit-flex: 1 2 400px;
    flex: 1 2 400px;
}

/* 弹性布局 */
.flexWrap{
    display: flex;
    border:1px solid #ddd;
    /*设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。*/
    justify-content: space-between;
    color:#fff;
}
.flexWrap span{
    flex:none;  
}
.flexWrap span:nth-of-type(1){
    background: #f00;
}
.flexWrap span:nth-of-type(2){
    background: #f0f;
}
.flexWrap span:nth-of-type(3){
    background: #00f;
}

/*测试垂直水平居中*/
.test-flex-center{
    display: flex;
    background-color: #0ff;
    width:200px;
    height: 200px;

    align-items: center;
    justify-content: center;
}
.test-flex-center div{
    flex: none;
    width:100px;
    height: 100px;
    color:#fff;
    background-color: #00f;
    
}
</style>



<template>
    <div>
<pre>
flex是一个复合属性，flex：none | flex-grow  flex-shrink || flex-basis
注：当应用弹性盒子应用 justify-content: space-between; 相关属性时，此时flex:属性中的 flex-grow及flex-shrink 属性不能为1，且flex-basis 属性应为auto;

flex-grow：
用来指定扩展比率，即剩余空间是正值时此「flex子项」相对于「flex容器」里其他「flex子项」能分配到空间比例。
在「flex」属性中该值如果<b>被省略则默认为「1」</b>
flex-shrink：
用来指定收缩比率，即剩余空间是负值时此「flex子项」相对于「flex容器」里其他「flex子项」能收缩的空间比例。
在收缩的时候收缩比率会以伸缩基准值加权
在「flex」属性中该值如果<b>被省略则默认为「1」</b>
flex-basis：
用来指定伸缩基准值，即在根据伸缩比率计算出剩余空间的分布之前，「flex子项」长度的起始数值。
在「flex」属性中该值如果<b>被省略则默认为「0%」</b>
在「flex」属性中该值如果被指定为「auto」，则伸缩基准值的计算值是自身的width设置，
如果自身的宽度没有定义，则长度取决于内容。

如果缩写「flex: 1」, 则其计算值为「1 1 0%」
如果缩写「flex: auto」, 则其计算值为「1 1 auto」
如果「flex: none」, 则其计算值为「0 0 auto」
如果「flex: 0 auto」或者「flex: initial」, 则其计算值为「0 1 auto」，即「flex」初始值


</pre>
        <h3>测试弹性布局中的  justify-content 属性：需设置flex-basis值为auto</h3>
        <div class="flexWrap">
          <span>1</span>
          <span>1 2 3</span>
          <span>10</span>
         </div>


        <p></p>


        <h3>测试弹性布局中的  flex 属性：目前外容器宽度为400px</h3>
        <h1>flex示例：</h1>
<pre>
平均分布各子元素
</pre>
        <ul id="box-new-wrap" class="box-new-wrap">
            <li>flex:1;</li>
            <li>flex:1;</li>
            <li>flex:1;</li>
        </ul>

        <p></p>
<pre>
总宽 < 容器设定的宽
容器可剩余宽为：400-300=100
可得各元素的扩展量为：
(1/(1+2+3))*100 约为 16px
(2/(1+2+3))*100 约为 34px
(3/(1+2+3))*100 约为 50px
</pre>
        <ul id="box-new-wrap2" class="box-new-wrap">
            <li>flex:1 0 100px;</li>
            <li>flex:2 0 100px;</li>
            <li>flex:3 0 100px;</li>
        </ul>
        
        <p></p>

<pre>
总宽 > 容器设定的宽
容器可剩余宽为：1200-400=800
由于同时设置了收缩因子，所以加权综合可得：400*1+400*2+400*3=2400
可得各元素的收缩值为：
(400*1/2400)*800 约为 133px
(400*2/2400)*800 约为 267px
(400*3/2400)*800 约为 400px
</pre>        
        <ul id="box-new-wrap3" class="box-new-wrap">
            <li>flex:1 1 400px;</li>
            <li>flex:1 2 400px;</li>
            <li>flex:1 2 400px;</li>
        </ul>

        <h3>可实现元素水平垂直居中（块元素，多行文字，图片等）</h3>
        <div class="test-flex-center">
            <div>测试水平垂直居中</div>
        </div>
<pre>
.test-flex-center{
    display: flex;
    align-items: center;
    justify-content: center;
}

<b>之前较常用的解决方案：</b>
增加一个宽度为0的行内块级（display: inline-block; vertical-align:middle;height等于外容器高度，line-height:0;font:0;）元素

但要注意：
* ie6 ie7：中的div不支持display:inline-block; 要添加zoom:1; *display:inline;来解决
* ie6：ie6的line-height:;对display:inline-block;元素也不生效；
</pre>


   </div>
</template>

