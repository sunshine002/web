<style>
    .old-flex-wrap h1 {
        font: bold 20px/1.5 georgia, simsun, sans-serif;
    }

    .box-wrap1,
    .box2 {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-box;
        margin: 0;
        padding: 10px;
        background: #000;
        list-style: none;
    }

    .box-wrap1 {
        -webkit-box-orient: horizontal;
        -moz-box-orient: horizontal;
        -ms-box-orient: horizontal;
        width: 260px;
        height: 100px;
    }

    .box2 {
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        -ms-box-orient: vertical;
        width: 100px;
        height: 260px;
    }

    .box0,
    .box06 {
        -webkit-box-align: start;
        -moz-box-align: start;
        -ms-box-align: start;
    }

    .box02,
    .box07 {
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-box-align: center;
    }

    .box03,
    .box08 {
        -webkit-box-align: end;
        -moz-box-align: end;
        -ms-box-align: end;
    }

    .box04,
    .box09 {
        -webkit-box-align: baseline;
        -moz-box-align: baseline;
        -ms-box-align: baseline;
    }

    .box05,
    .box010 {
        -webkit-box-align: stretch;
        -moz-box-align: stretch;
        -ms-box-align: stretch;
    }

    .box-wrap1 li,
    .box2 li {
        padding: 10px;
    }

    .box-wrap1 li:nth-child(1),
    .box2 li:nth-child(1) {
        background: #666;
    }

    .box-wrap1 li:nth-child(2),
    .box2 li:nth-child(2) {
        background: #999;
    }

    .box-wrap1 li:nth-child(3),
    .box2 li:nth-child(3) {
        background: #ccc;
    }
</style>

<template>
    <div class="old-flex-wrap">
        <h1>横向排列时子元素从起始位置对齐 box-align:start;</h1>
        <ul class="box0 box-wrap1">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <h1>横向排列时子元素居中对齐 box-align:center;</h1>
        <ul class="box02 box-wrap1">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <h1>横向排列时子元素从结束位置对齐 box-align:end;</h1>
        <ul class="box03 box-wrap1">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <h1>横向排列时子元素基线对齐 box-align:baseline;</h1>
        <ul class="box04 box-wrap1">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <h1>横向排列时子元素自适应父元素 box-align:stretch;</h1>
        <ul class="box05 box-wrap1">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <h1>纵向排列时子元素从起始位置对齐 box-align:start;</h1>
        <ul class="box0 box2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <h1>纵向排列时子元素居中对齐 box-align:center;</h1>
        <ul class="box02 box2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <h1>纵向排列时子元素从结束位置对齐 box-align:end;</h1>
        <ul class="box03 box2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <h1>纵向排列时子元素基线对齐 box-align:baseline;</h1>
        <ul class="box04 box2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <h1>纵向排列时子元素自适应父元素 box-align:stretch;</h1>
        <ul class="box05 box2">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
</template>

