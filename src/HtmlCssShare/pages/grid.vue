<!-- <title>网格布局</title> -->
<style>
.wrapper {
    display: grid;
    grid-template-columns: 100px 10px 100px 10px 100px 10px 100px;
    grid-template-rows: auto 10px auto 10px auto;
}

.box-grid-wrap {
    background-color: #444;
    color: #fff;
    font-size: 150%;
    padding: 20px;
    text-align: center;
}

.a {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
}

.b {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
}

.c {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
}

.d {
    grid-column-start: 7;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 2;
}

.e {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
}

.f {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
}

.g {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 4;
}

.h {
    grid-column-start: 7;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 4;
}

.i {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 5;
    grid-row-end: 6;
}

.j {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 5;
    grid-row-end: 6;
}
</style>
<template>
    <div>
        <p>网格布局：即CSS Grid Layout Module布局，它可以将应用程序分割成不同的空间，或者定义他们的大小、位置以及层级。</p>
        <p>仅在IE10+上支持，而且也仅支持部分属性，目前在其它各别浏览器（Chrome、Safari、Opera和Firefox）中测试只能启用开发中的实验性网络平台功能，故此部分内容目前仅了解即可</p>
        <p><a href="http://www.w3cplus.com/css3/what-is-css-grid-layout.html">http://www.w3cplus.com/css3/what-is-css-grid-layout.html</a></p>
        <p><a href="http://www.w3cplus.com/css3/how-to-enable-support-for-grid-layout-in-various-browsers.html">http://www.w3cplus.com/css3/how-to-enable-support-for-grid-layout-in-various-browsers.html</a></p>
        

<pre>
grid-column：是grid-column-start / grid-column-end两个属性的缩写方式
grid-row：   是grid-row-start / grid-row-end两个属性的缩写方式
grid-area：  是这四个属性的缩写方式grid-row-start / grid-column-start/ grid-row-end / grid-column-end。

-ms-grid-column         获取或设置一个值，指定在哪一列网格放置对象的位置
-ms-grid-column-align   获取或设置一个值，指定网格列内的对象的水平对齐方式
-ms-grid-columns        获取或设置一个或多个指定的对象中的每个网格列宽度的值
-ms-grid-column-span    获取或设置一个值，指定的网格中的对象跨越的列数
-ms-grid-row            获取或设置一个值，指定在哪个网格行中要放置对象的位置
-ms-grid-row-align      获取或设置一个值，指定网格行中的对象的垂直对齐方式
-ms-grid-rows           获取或设置指定对象中每个网格行的高度的一个或多个值
-ms-grid-row-span       获取或设置一个值，指定的对象跨越的网格的行数


由于之前开启浏览器的CSS Grid Layout模块功能，导致项目中的所有弹窗都失效了，故大家了解一下即可。

.wrapper {
    display: grid;
    grid-template-columns: 100px 10px 100px 10px 100px 10px 100px;
    grid-template-rows: auto 10px auto 10px auto;
}
.a {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
}

.b {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
}
...
以下是应用网格的效果图，要开启浏览器的CSS Grid Layout模块功能才可以看到。
<img src="../img/grid.png" alt="">
</pre>
        <div class="wrapper">
        <div class="box-grid-wrap a">A</div>
        <div class="box-grid-wrap b">B</div>
        <div class="box-grid-wrap c">C</div>
        <div class="box-grid-wrap d">D</div>
        <div class="box-grid-wrap e">E</div>
        <div class="box-grid-wrap f">F</div>
        <div class="box-grid-wrap g">G</div>
        <div class="box-grid-wrap h">H</div>
        <div class="box-grid-wrap i">I</div>
        <div class="box-grid-wrap j">J</div>
    </div>

    </div>
    
</template>
