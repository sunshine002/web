<style>
/* 在屏幕宽 600和1200 之间应用响应式字体 */

.wrap2 {
    width: calc(100% - 50px);
    /*width: -webkit-calc(100% - 50px);*/
    /*background-color: yellow;*/
    padding: 5px;
    text-align: left;
    font-size: 10px;
}

@media screen and (min-width:300px) {
    .wrap2 {
        font-size: calc( 10px + (30 - 10) * ((100vw - 300px) / (600 - 300)) );
    }
}

@media screen and (min-width:600px) {
    .wrap2 {
        font-size: 30px;
    }
}
</style>
<template>
    <div class="wrap2">

<pre>
.wrap2 {
    width: calc(100% - 50px);
    /*width: -webkit-calc(100% - 50px);*/
    /*background-color: yellow;*/
    padding: 5px;
    text-align: left;
    font-size: 10px;
}

@media screen and (min-width:300px) {
    .wrap2 {
        font-size: calc( 10px + (30 - 10) * ((100vw - 300px) / (600 - 300)) );
    }
}

@media screen and (min-width:600px) {
    .wrap2 {
        font-size: 30px;
    }
}

浏览器兼容性：移动端支持不是很好，<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc">点击查看</a>

</pre>

        测试css3中calc()函数功能：实现完美的字体响应式效果.
    </div>
</template>
