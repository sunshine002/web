### 项目说明
- 站点基于webpack:^3.7.1, vue:^2.0.3 相关技术构建
- docs目录下放的是编译后的文件，用这个名称是为了可以直接预览Github Pages下的html文件，地址为：http://lifenping.github.io/web-share/#/

### 站点内容
- web端分享
- vue知识总结与分享demo

### 项目启动说明：
- npm install
- npm start
- npm run build

###  gethub pages

- 疑难问题解决方案
  - https://github.com/neal1991/articles-translator/blob/master/Github%20Pages%E4%BB%A5%E5%8F%8A%E5%8D%95%E9%A1%B5%E9%9D%A2%E5%BA%94%E7%94%A8.md

- docs/404.html
  - Github Pages对应的路由不存在时会到404html,里面可添加一个重定向的跳转，跳到github pages的根目录下，此项目即 /web-share

  - 对于非hash模式的路由，例history模式,可解决，刷新前端生成的路由时重定向跳转到 /web-share

  - 注意webpack的output中的publickPath需设置为'/'，此站点会有一个二级域名对应的route应用，根据url中有web-share内容时加载二级域名对应的router构成的应用，如果publickPath不配的话会用默认值''，导致访问此二级域名找不到对应的main.js文件。具体查看https://www.webpackjs.com/configuration/output/#output-publicpath

    ```
    output: {
        path: path.join(__dirname, './docs'),
        filename: '[name].js',
        publicPath: '/'
      },
    ```
