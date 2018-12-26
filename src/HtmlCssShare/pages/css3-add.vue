<!-- <title>目标伪类选择符 E:target</title> -->
<style>
  .css3-wrap pre{
    font-size:16px;
  }
  .test-bg{
    
    background-image:url(https://www.lmlc.com/cdn/product/1474197800893.jpg);
    background-repeat: no-repeat;

    background-origin: content-box;

    border:1px solid #f00;
    padding:30px;
    width:200px;
    height:100px;
    /*color: #fff;*/
  }
</style>
<template>
    <div class="css3-wrap">
<pre>
background-origin:border-box | padding-box | content-box; 
设置或检索对象的背景图像计算 <' background-position '> 时的参考原点(位置)。

padding-box：从padding区域（含padding）开始显示背景图像。
border-box： 从border区域（含border）开始显示背景图像。
content-box：从content区域开始显示背景图像。

<b>注意应用此属性：一定要设置 background-repeat: no-repeat;否则 origin属性不生效</b>
<h3>兼容性：不支持ie6-ie8，主要应用于移动端</h3>
</pre>
        <p class="test-bg">测试背景区域</p>
<pre>
background-origin: content-box;
</pre>


      <h3>background-image: 在css3中有修改</h3>
<pre>
background-image：< image> | none;
< image>：使用绝对或相对地址指或者<b style="color:#f00;">创建渐变</b>色来确定图像。
如果定义了<b>多组背景图</b>且背景图之间有重叠，写在前面的将会盖在写在后面的图像之上,注：<b>多组图像的定义不支持ie6-ie8</b>

background-image: url(skin/p_103x196_1.jpg),url(skin/p_103x196_2.jpg),url(skin/p_103x196_3.jpg);
background-image: linear-gradient(to top, #45B5DA, #0382AD);
</pre>
    
    <h3>background-clip：属性</h3>
<pre>
background-clip：border-box | padding-box | content-box | text;
padding-box：从padding区域（不含padding）开始向外裁剪背景。
border-box： 从border区域（不含border）开始向外裁剪背景。
content-box：从content区域开始向外裁剪背景。
text：       从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果。遮罩效果 See with Webkit
<h3>兼容性：ie6-ie8不支持</h3>
</pre>
    </div>
</template>
