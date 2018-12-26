
<style>
    .dev-weinre-wrap pre{
        font-size:16px;
        background-color: #fff;
    }
</style>

<template>
    <div class="dev-weinre-wrap">
<pre>
<b>功能：</b>
1 可创建本地服务，并解析freemarker文件；
2 新版ftl-node可用来代理https协议的服务。

<b>可通过启用<span style="color:#f00;">新版本</span>的ftl-node服务成功代理https请求：</b>
前提：
启动ftl-node命令时用 ftl-node -t all -p 80,443，并且注意安装AppData\Roaming\.cert_center(window系统)下的证书。

方案1：
1）修改hosts配置：如 127.0.0.1 wx.nsip.163.com
2）通过ftl-node创建本地模拟数据接口：如：创建本地模拟数据接口 http://127.0.0.1/mock/mock.html 
此时：https://wx.nsip.163.com/mock/mock.html地址即可映射到ftl-node本地服务器中

<img src="../img/ftl-node1.png" alt="">

方案2：
仅仅用ftl-node中的代理，模拟接口可不用ftl-node创建，可用json-server创建
1）修改hosts配置：如 127.0.0.1 wx.nsip.163.com
2）启用ftl-node服务并设置代理：
设置如下图所示：

<img src="../img/ftl-node2.png" alt="">

</pre>
    </div>
</template>

            