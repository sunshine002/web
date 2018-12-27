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

  - 注意webpack的output中的publickPath的设置
    - 项目中如果有二级目录或多级目录时，需设置为'/'，项目中每一级目录都可正常访问；
    - 当只有一级目录时，在项目中publickPath为'/'或''都ok
    - 但编译后的文件放到Github Pages中时二级目录下的main.js路径是相对于Github Pages的根目录而非Github Pages(https://sunshine002.github.io/web-share/)目录下的（Github Pages的问题）,故publickPath只能设为相对目录，即：publickPath:''，也是默认值


    ```
    output: {
        path: path.join(__dirname, './docs'),
        filename: '[name].js',
        publicPath: ''
      },
    ```
    - 介于上述问题，之前项目根据加载不同的url链接来加载不同的路由与组件模式，调为了单路由模式
    - 以上问题主要是配合Github Pages的应用，项目中任何方式来实现都ok
