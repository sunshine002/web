
<style>
    .dev-weinre-wrap pre{
        font-size:16px;
    }
</style>

<template>
    <div class="dev-weinre-wrap">
<pre>
<b>Browsersync功能：</b>
能让浏览器实时、快速响应您的文件更改（html、js、css、sass、less等）并自动刷新页面。
更重要的是 Browsersync可以同时在PC、平板、手机等设备下进项调试。
您可以想象一下：“假设您的桌子上有pc、ipad、iphone、android等设备，同时打开了您需要调试的页面，
当您使用browsersync后，您的任何一次代码保存，以上的设备都会同时显示您的改动”。

<b>主要优点：</b>
1 可进行多端调试，保存代码即可看到多端页面自动刷新后的效果；
2 在一个浏览器中滚动页面、点击等行为也会同步到其他浏览器和设备中；

<b>安装服务：</b>
npm install -g browser-sync 

<b>启动服务：</b>
browser-sync start < options>
命令参考：https://browsersync.io/docs/command-line

<b>常用服务器实例：</b>

<img src="../img/sync1.png" alt="">
输入如上截图中的命令，即在当前项目目录中启动服务并监听 test.html 文件，即可自动打开 http://localhost:3000 界面，
访问http://localhost:3000/test.html地址，然后在sublime中随意更改里面的代码，多端的http://localhost:3000/test.html页面就会自动刷新；

<b>代理实例：</b>

<img src="../img/sync2.png" alt="">
如本地启动了ftl-node服务，就可以用代理服务来访问ftl-node下的服务，启动命令如上截图所示

若在手机端打开调试页面，直接把localhost换成电脑ip地址即可，上面的截图中也可看到ip地址；

与weinre的区别：
1 可进行多端调试，保存代码即可看到多端页面自动刷新后的效果；
2 在一个浏览器中滚动页面、点击等行为也会同步到其他浏览器和设备中；
3 页面中不用引入 额外的 js文件：<scriptsrc="http://电脑ip:8080/target/target-script-min.js#anonymous"></script>

参考文档：
英文文档：https://browsersync.io/
中文文档：http://www.browsersync.cn/
</pre>
    </div>
</template>

            