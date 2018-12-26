
<style>
h1{font:bold 20px/1.5 georgia,simsun,sans-serif;}
.box-wrap-1,.box-wrap-2{display:-webkit-box;display:-moz-box;display:-ms-box;margin:0;padding:10px;background:#000;list-style:none;}
.box-wrap-1{-webkit-box-orient:horizontal;-moz-box-orient:horizontal;-ms-box-orient:horizontal;width:260px;height:100px;}
.box-wrap-2{-webkit-box-orient:vertical;-moz-box-orient:vertical;-ms-box-orient:vertical;width:100px;height:260px;}
#box,#box5{-webkit-box-pack:start;-moz-box-pack:start;-ms-box-pack:start;}
#box2,#box6{-webkit-box-pack:center;-moz-box-pack:center;-ms-box-pack:center;}
#box3,#box7{-webkit-box-pack:end;-moz-box-pack:end;-ms-box-pack:end;}
#box4,#box8{-webkit-box-pack:justify;-moz-box-pack:justify;-ms-box-pack:justify;}
.box-wrap-1 li{width:50px;}
.box-wrap-2 li{height:50px;}
.box-wrap-1 li:nth-child(1),.box-wrap-2 li:nth-child(1){background:#666;/* box-flex:1; -moz-box-flex:1; -webkit-box-flex:1;*/}
.box-wrap-1 li:nth-child(2),.box-wrap-2 li:nth-child(2){background:#999; /*box-flex:2; -moz-box-flex:2; -webkit-box-flex:2;*/}
.box-wrap-1 li:nth-child(3),.box-wrap-2 li:nth-child(3){background:#ccc; /*box-flex:3; -moz-box-flex:3; -webkit-box-flex:3;*/}
</style>

<template>
    <div>
        <h1>横向排列时子元素从起始位置对齐 box-pack:start;</h1>
<ul id="box" class="box-wrap-1">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<h1>横向排列时子元素居中对齐 box-pack:center;</h1>
<ul id="box2" class="box-wrap-1">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<h1>横向排列时子元素从结束位置对齐 box-pack:end;</h1>
<ul id="box3" class="box-wrap-1">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<h1>横向排列时子元素两端对齐 box-pack:justify;</h1>
<ul id="box4" class="box-wrap-1">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<h1>纵向排列时子元素从起始位置对齐 box-pack:start;</h1>
<ul id="box5" class="box-wrap-2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<h1>纵向排列时子元素居中对齐 box-pack:center;</h1>
<ul id="box6" class="box-wrap-2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<h1>纵向排列时子元素从结束位置对齐 box-pack:end;</h1>
<ul id="box7" class="box-wrap-2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<h1>纵向排列时子元素两端对齐 box-pack:justify;</h1>
<ul id="box8" class="box-wrap-2">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
    </div>
</template>

            