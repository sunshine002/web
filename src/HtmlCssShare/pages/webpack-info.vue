<template>
    <div>
<pre style="font-size:16px;line-height: 30px;">
<b>webpack 构建工具使用总结：</b>
Webpack 是一个模块打包器。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源；
<a href="https://webpack.github.io/docs/configuration.html">详情点击查看官方文档</a>

包文件及配置文件说明：
1 添加package.json文件，可以手工编写，也可以使用npm init命令自动生成。
2 创建配置文件：webpack.config.js，里面指明入/出口文件等；
3 <b>实时刷新</b>：
1) 输入命令：webpack-dev-server --hot --inline --progress --colors，修改完src下的文件可实时监听并刷新；
2) 输入命令： webpack --watch来实时监听并手动刷新页面；
注：上面命令可在package.json包文件的scripts项里配置npm快速启动方式；

另：上面两种实时<b>监听方式的区别</b>：
1）当使用webpack-dev-server --hot --inline命令时，在每次修改文件，是将文件打包保存在内存中并没有写在磁盘里，这种打包得到的文件和项目根目录中的index.html位于同一级（但是看不到，因为它在内存中并没有在磁盘里），目前此种方式主要用于开发中。
2）使用webpack --watch 命令（根据webpack.config.js打包文件，通过--config xxxx.js修改)）将打包后的文件保存在磁盘中，用于发布中。

4 webpack.config.js 配置文件：
1） resolve项：
modulesDirectories 定义模块目录；
extensions 定义可省略的后缀名；
2） module项：模块中的加载器loaders使用
* 常用loaders（可查看项目文件）：
   loader含义及使用，查看：http://zhaoda.net/webpack-handbook/loader.html
* <b>启服务容易导致出错且容易忽略的loaders：</b>
   file-loader: webpack打包字体图标；
   html-loader: 把html文件当模版文件使用，使其转化为字符串，类似vue中的 .tpl格式文件；
3）plugins 配置项，解说几个常用插件：
html-webpack-plugin 插件：
可以帮助生成 HTML 文件，在 body 元素中，使用 script 来包含所有你的 webpack bundles，具体体使用及配置请参考：https://github.com/ampedandwired/html-webpack-plugin
extract-text-webpack-plugin 插件：
使样式通过< link>引入，而不是放在< style>标签内；
插件也支持所有独立样式打包成一个css文件，增加多一个参数即可：new ExtractTextPlugin("style.css", {allChunks: true})，
具体参考：https://github.com/webpack/extract-text-webpack-plugin
webpack.optimize.CommonsChunkPlugin：分割App中的共有模块和代码模块；
new webpack.optimize.UglifyJsPlugin() // 压缩
new webpack.optimize.OccurrenceOrderPlugin() //排序输出
// 全局引入jquery库：
new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
4）<b>webpack 代理服务器的使用：</b>
devServer : {
    port: 3333,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    proxy: {
        '/api/*': {
            target: 'http://127.0.0.1:3334',
            secure: false
        }
    }
}
即：127.0.0.1:3333/api/user/list 可用代理服务  http://127.0.0.1:3334/api/user/list

另外：3334端口的服务器可设置routes：
启动服务时添加命令  --routes url.json，且url.json内容如下所示：
{
    "/api/": "/"
}
此时访问：http://127.0.0.1:3334/api/user/list 相当于 访问了 http://127.0.0.1:3334/user/list

     
5 启动服务常见错：
1）如引用含有字体图标的样式，一定要添加file-loader，否则会报错不能正常引用相关样式；
2）npm或node.js版本低也会报错，此时要进行升级并重新安装node-moudle下的包；
3）npm install vue时，默认安装的是vue2.0，vue2.0和1.0有不少的区别，要尽量做到兼容，如：vue-router2.0版本要对应vue2.0的版本，并且如果要正确解析template及render，webpack-config中要配置 alias 别名项。否则不能正确解析；
4）http://localhost:8080/ 与 http://127.0.0.1:8080/都可以访问webpack服务，但把地址换成电脑的ip地址就不能访问了，需要输入命令：<b>启动服务器需要配下host</b> --host 10.134.90.131，主要用于手机上的调试；
5）<b>如果把webpack安装在项目中，而不是全局中，调webpack命令的话只能在 package.json 文件的script中设置npm命令来调用，不能直接运行 webpack；</b>
            
6 npm 命令说明：
1）npm install webpack --save-dev：在项目中安装并将依赖写在package.json文件中；
2）webpack-dev-server --port 3000(将端口号改为3000)
3）<b>4个npm简写命令：</b>
  ● npm start是npm run start的简写
  ● npm stop是npm run stop的简写
  ● npm test是npm run test的简写
  ● npm restart是npm run stop && npm run restart && npm run start的简写（复合写法，执行三个脚本命令）
参考：http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html
4) 若想把webpack-dev-server服务改成https协议的，可以在命令中添加 --https，具体命令参考:https://webpack.github.io/docs/webpack-dev-server.html

7 现象解说：
1）安装webpack-dev-server后就可以在命令行中输入webpack-dev-server开启服务，然后在浏览器  地址栏中输入localhost:端口号，就可以在浏览器中打开项目根目录的index.html文件，如果项目根目录中没有index.html文件，就会在浏览器中列出项目根目录中的所有的文件夹。

8 包版本说明：
  ● 指定版本：比如1.2.2，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
  ● 波浪号（tilde）+指定版本：比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
  ● 插入号（caret）+指定版本：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
  ● latest：安装最新版本。
</pre>
    </div>
</template>
