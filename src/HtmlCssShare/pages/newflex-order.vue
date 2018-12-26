
<style>
h1 {
    font: bold 20px/1.5 georgia, simsun, sans-serif;
}

.box {
    display: -webkit-flex;
    display: flex;
    margin: 0;
    padding: 10px;
    list-style: none;
    background-color: #eee;
}

.box li {
    width: 100px;
    height: 100px;
    border: 1px solid #aaa;
    text-align: center;
}

#box li:nth-child(1) {
    -webkit-order: 10;
    order: 10;
}

#box li:nth-child(2) {
    -webkit-order: 0;
    order: 0;
}

#box li:nth-child(3) {
    -webkit-order: 1;
    order: 1;
}

#box li:nth-child(4) {
    -webkit-order: 2;
    order: 2;
}

#box li:nth-child(5) {
    -webkit-order: 3;
    order: 3;
}
</style>
<template>
    <div>
        <h1>order示例：</h1>
        <ul id="box" class="box">
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
        </ul>
<pre>

#box li:nth-child(1) {
    -webkit-order: 10;
    order: 10;
}

#box li:nth-child(2) {
    -webkit-order: 0;
    order: 0;
}

#box li:nth-child(3) {
    -webkit-order: 1;
    order: 1;
}

#box li:nth-child(4) {
    -webkit-order: 2;
    order: 2;
}

#box li:nth-child(5) {
    -webkit-order: 3;
    order: 3;
}
</pre>
    </div>
</template>