<style>
	.fluid-wrap .p1{
		border-width: 1px;
		border-style:groove;
		margin-bottom: 10px;
	}
</style>

<template>
    <div class="fluid-wrap">
		<p class="p1">流式布局是现在组内项目中的wap页面应用最广的一种布局，模块宽度统一使用百分比格式，即所有列的模块相加之和为100%,
		<br>

		另外：如果有边框(此值不可用百分比单位)的话，可用box-sizing:border-box;属性，来使所有模块宽度相加为100%；
		</p>

<pre>
box-sizing：content-box | border-box;
默认值：content-box

取值：
content-box：
padding和border不被包含在定义的width和height之内。对象的实际宽度等于设置的width值和border、padding之和，即 ( Element width = width + border + padding )
此属性表现为标准模式下的盒模型。
border-box：
padding和border被包含在定义的width和height之内。对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度，即 ( Element width = width )
此属性表现为怪异模式下的盒模型。

兼容性：ie6 7 不支持该属性，主要用于移动端



<strong>再来看一下平常较常用的border-width及border-style的默认值及取值：</strong>
语法：
border-width：< line-width>{1,4}
< line-width> = < length> | thin | medium | thick

< length>：用长度值来定义边框的厚度。不允许负值
medium：定义<strong>默认厚度</strong>的边框。计算值为3px
thin：定义比默认厚度细的边框。计算值为1px
thick：定义比默认厚度粗的边框。计算值为5px

border-style：< line-style>{1,4}
< line-style> = none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset

取值：
none：无轮廓。border-color将被忽略，border-width计算值为0，除非边框轮廓为图像，即border-image。
hidden：隐藏边框。<strong style="color:#f00;">IE7及以下尚不支持</strong>
dotted：点状轮廓。<strong style="color:#f00;">IE6下显示为dashed效果</strong>
dashed：虚线轮廓。
solid：实线轮廓

double：双线轮廓。两条单线与其间隔的和等于指定的border-width值
groove：3D凹槽轮廓。
ridge：3D凸槽轮廓。
inset：3D凹边轮廓。
outset：3D凸边轮廓。

<p style="border-style:double;">test border-style</p>
<p style="border-style:groove;">test border-style</p>
<p style="border-style:ridge;">test border-style</p>
<p style="border-style:inset;">test border-style</p>
<p style="border-style:outset;">test border-style</p>
</pre>

    	
    </div>
</template>



