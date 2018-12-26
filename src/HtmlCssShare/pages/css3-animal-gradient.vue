<!-- <title>目标伪类选择符 E:target</title> -->
<style>
.wrap-animal pre{
  font-size:16px;
}
@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }

  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
.title {
    color: #f35626;
    /*background-color: #ff0000;*/
    background-image: -webkit-linear-gradient(0,#ff0000,#00ff00);
    /* 从前景内容的形状（比如文字）作为裁剪区域向外裁剪 */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: hue 3s infinite linear;
}
</style>
<template>
    <div class="wrap-animal">
        <h3 class="title">test anmial background</h3>

<pre>
<b>filter: hue-rotate(0deg);</b> 
CSS3的滤镜属性hue-rotate可以控制显示颜色变化，给图像应用<b>色相</b>旋转，0deg为原色，每360度轮换一圈颜色,“angle”一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。
若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。

@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }

  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
.title {
    color: #f35626;
    /*background-color: #ff0000;*/
    background-image: -webkit-linear-gradient(0,#ff0000,#00ff00);
    /* 从前景内容的形状（比如文字）作为裁剪区域向外裁剪 */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: hue 3s infinite linear;
}
</pre>

    </div>

</template>
