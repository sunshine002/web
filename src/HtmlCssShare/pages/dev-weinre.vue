
<style>
    .dev-weinre-wrap pre{
        font-size:16px;
    }
</style>

<template>
    <div class="dev-weinre-wrap">
<pre>
<b>可调试远程wap页的npm插件weinre：</b>

Weinre 的全称是 Web Inspector Remote（远程 Web 调试工具），
Weinre 能够同步桌面的调试客户端和移动设备上的调试目标，需要你搭建一个调试服务器（Debug Server）。

使用方法：
1 安装：npm install weinre -g
2 设置服务器端口：weinre --httpPort 8080 --all   电脑默认8080，一般用默认的即可
3 启动服务：weinre --httpPort 8080 --boundHost -all-，若端口为默认直接执行：weinre
命令：--boundHost    ip address to bind the server to      default: localhost

<b>weinre角色介绍：</b>

目标页：要调试的手机wap页，页面中要引入js文件：< script src="http://电脑ip:8080/target/target-script-min.js#anonymous">< /script>
调试端：我们的本地浏览器，在这里对目标页面进行调试
服务器：监控目标页面和调试端的动作，向两端推送消息

<b>weinre缺点:</b>

目前仅仅能够看到dom结构，和当前生效的css，并不能看到css是哪个文件的，也不能断点调试，能够使用 console。
手机调试除了weinre,还有其他一些工具jsconsole， socketdebug，这些工具感觉都没有weinre好用。
</pre>
    </div>
</template>

            