<template>
<pre style="font-size:16px;">

meta标签：http://www.w3school.com.cn/html5/html5_meta.asp
可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词等。
<img src="../img/meta.gif" style="width:70%;" /> 
html4.01:
&lt;meta http-equiv="content-type" content="text/html; charset=ISO-8859-1"&gt 
在 HTML 5 中：
&lt;meta charset="ISO-8859-1"&gt 

适用于 移动端
minimal-ui: iOS 7.1的Safari为meta标签新增minimal-ui属性，在网页加载时隐藏地址栏与导航栏,现在ios8及以上版本应该已忽略并去掉此特性了 
&lt;meta name="viewport" content="width=device-width,target-densitydpi=high-dpi,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui" /&gt 

规定页面所代表的 Web 应用程序的名称，如content="pop.lmlc.com" 
&lt;meta name="application-name" content="" /&gt 


定义网页搜索引擎索引方式：content值：none，noindex，nofollow，all，index和follow 
&lt;meta name="robots" content="all"&gt 
设定为all：文件将被检索，且页面上的链接可以被查询； 
设定为none：文件将不被检索，且页面上的链接不可以被查询； 
设定为index：文件将被检索； 
设定为follow：页面上的链接可以被查询； 
设定为noindex：文件将不被检索，但页面上的链接可以被查询； 
设定为nofollow：文件将不被检索，页面上的链接可以被查询。 


浏览器窗口左上角显示的项目icon图标，此图标需放在项目的根目录下
&lt;link rel="shortcut icon" href="" /&gt;


适用于 移动端: Apple设备私有的apple-touch-icon属性,safari浏览器中将网站添加到主屏幕所显示的图标
&lt;link rel="apple-touch-icon-precomposed" sizes="114x114" href="" /&gt 


页面标题
&lt;title&gt 立马理财，为你放大梦想！ &lt;/title&gt 
&lt;meta name="keywords" content="页面关键词" /&gt 
&lt;meta name="description" content="页面描述内容" /&gt 


以下是针对ie8的一个新特性：指定文档兼容性格式，IE=edge指定ie使用可用的最高级别模式，添加 chrome=1 将允许站点在使用了谷歌浏览器内嵌框架（Chrome Frame）的客户端渲染
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /&gt 


指定360安全浏览器使用 webkit 内核渲染:
另外:content="webkit|ie-comp|ie-stand"表明分别用webkit内核/ie兼容模式/ie标准模式 
&lt;meta name="renderer" content="webkit">


全屏显示 WebApp，隐藏 safari 导航栏以及工具栏 
注：想达到全屏显示的效果必须通过主屏的图标打开网站，直接在Safari输入URL是不行的
&lt;meta name="apple-mobile-web-app-capable" content="yes" /&gt 


指定的iphone中safari顶端的状态条的样式: content="blank/gray":
注：只有在name="apple-mobile-web-app-capable" content="yes"模式下进入才可生效
&lt;meta name="apple-mobile-web-app-status-bar-style" content="blank" /&gt 


告诉设备忽略将页面中的数字识别为电话号 
&lt;meta name="format-detection" content="telephone=no" /&gt 
	
</pre>
</template>
