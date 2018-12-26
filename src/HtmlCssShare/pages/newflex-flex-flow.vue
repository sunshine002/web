<!-- <title>弹性布局-flex-flow</title> -->
<style>
h1 {
    font: bold 20px/1.5 georgia, simsun, sans-serif;
}

.box {
    display: -webkit-flex;
    display: flex;
    width: 220px;
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

#box {
    -webkit-flex-flow: row nowrap;
    flex-flow: row nowrap;
}

#box2 {
    -webkit-flex-flow: row wrap-reverse;
    flex-flow: row wrap-reverse;
}

#box3 {
    height: 220px;
    -webkit-flex-flow: column wrap-reverse;
    flex-flow: column wrap-reverse;
}
</style>
<template>
    <div>
        <h1>flex-flow示例：</h1>
        <h2>flex-flow:row nowrap</h2>
        <ul id="box" class="box">
            <li>a</li>
            <li>b</li>
            <li>c</li>
        </ul>
        <h2>flex-flow:row wrap-reverse</h2>
        <ul id="box2" class="box">
            <li>a</li>
            <li>b</li>
            <li>c</li>
        </ul>
        <h2>flex-flow:column wrap-reverse;</h2>
        <ul id="box3" class="box">
            <li>a</li>
            <li>b</li>
            <li>c</li>
        </ul>
    </div>
</template>
