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

- Github Pages的进一步应用：
1. 之前对于hash路由模式的单页面应用的项目，会打包到docs(github pages资源目录的一种)目录下，生成Github Pages页并可访问；
2. 对于history模式，路由配置项base需要设为二级目录名
- 项目中当只有一级目录时，在项目中publicPath为'/'或''都ok；但含有二级或多级目录时，需设置为'/'，以保证成功加载资源；
- 若设为'/'，编译后的文件放到Github Pages中时二级目录下的main.js路径是相对于Github Pages的根目录而非Github Pages(https://sunshine002.github.io/web-share/)目录下的,故publicPath只能设为相对目录，即：publicPath:''，也是默认值

- 介于上述问题，之前项目根据加载不同的url链接来加载不同的路由与组件模式，调为了单路由模式且启动时只有一级目录，以使Github Pages主页可用，存在的问题是：在多级路由的页中直接刷新会找不到资源，所以尽量只通过路由跳转来实现页面切换；
- 在项目中添加404.html，可设置Github Pages中的404页重定向到项目首页

  ```
  output: {
      path: path.join(__dirname, './docs'),
      filename: '[name].js',
      publicPath: ''
    },
  ```
