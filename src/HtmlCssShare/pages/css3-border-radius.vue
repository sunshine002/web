<!-- <title>目标伪类选择符 E:target</title> -->
<style>
.wrap-border ul{margin:0;padding:0;}
.wrap-border li{list-style:none;margin:10px 0 0 0;padding:10px;background:#bbb;}
.wrap-border .test3 .one{border-radius:10px;}
.wrap-border .test3 .two{border-radius:10px 20px;}
.wrap-border .test3 .three{border-radius:10px 20px 30px;}
.wrap-border .test3 .four{border-radius:10px 20px 30px 40px;}
.wrap-border .test5 .one{border-radius:10px/5px;}
.wrap-border .test5 .two{border-radius:10px 20px/5px 10px;}
.wrap-border .test5 .three{border-radius:10px 20px 30px/5px 10px 15px;}
.wrap-border .test5 .four{border-radius:10px 20px 30px 40px/5px 10px 15px 20px;}
</style>
<template>
    <div class="wrap-border">
<pre>
border-radius：[ < length> | < percentage> ]{1,4} [ / [ < length> | < percentage> ]{1,4} ]

< length>：用长度值设置对象的圆角半径长度。不允许负值
< percentage>：用百分比设置对象的圆角半径长度。不允许负值

说明：
设置或检索对象使用圆角边框。提供2个参数，2个参数以“/”分隔，每个参数允许设置1~4个参数值，第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数
水平半径：如果提供全部四个参数值，将按上左(top-left)、上右(top-right)、下右(bottom-right)、下左(bottom-left)的顺序作用于四个角。
如果只提供一个，将用于全部的于四个角。
如果提供两个，第一个用于上左(top-left)、下右(bottom-right)，第二个用于上右(top-right)、下左(bottom-left)。
如果提供三个，第一个用于上左(top-left)，第二个用于上右(top-right)、下左(bottom-left)，第三个用于下右(bottom-right)。
垂直半径也遵循以上4点。
对应的脚本特性为borderRadius。

</pre>

        <h2>水平与垂直半径相同时：</h2>
        <ul class="test3">
            <li class="one">提供1个参数<br />border-radius:10px;</li>
            <li class="two">提供2个参数<br />border-radius:10px 20px;</li>
            <li class="three">提供3个参数<br />border-radius:10px 20px 30px;</li>
            <li class="four">提供4个参数<br />border-radius:10px 20px 30px 40px;</li>
        </ul>
        <h2>水平与垂直半径不同时：</h2>
        <ul class="test5">
            <li class="one">提供1个参数<br />border-radius:10px/5px;</li>
            <li class="two">提供2个参数<br />border-radius:10px 20px/5px 10px;</li>
            <li class="three">提供3个参数<br />border-radius:10px 20px 30px/5px 10px 15px;</li>
            <li class="four">提供4个参数<br />border-radius:10px 20px 30px 40px/5px 10px 15px 20px;</li>
        </ul>
    </div>
</template>
