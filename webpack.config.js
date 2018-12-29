const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
// const SRC_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {
  context: ROOT_PATH,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './docs'),
    filename: '[name].js',
    /**
     * 注：之所以用相对目录，是因为github pages中只能是相对路径，否则资源不是相对于github pages目录下的，而是根目录下的，资源会找不到
     * 另：如果在项目中路由切换成二级或三级时，直接刷新页面资源会找不到，原因是此处没有设成/，
     * 若想实现刷新时，无论是开发环境还是生产环境，都应该设成/，目前为了配置github pages只能通过路由进行跳转
     */
    publicPath: ''
  },
  // import时可以省略的文件后缀名
  resolve: {
    // 模块目录
    modules: ['common', 'node_modules'],
    extensions: ['.js', '.jsx', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6|js)$/,
        include: process.cwd(),
        loader: 'babel-loader'
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        }
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }, { // 业务样式, css module
        test: /\.(less)$/,
        // exclude: ['./node_modules', './src/common'],
        include: ['./src/HtmlCssShare', './src/VueShare'],
        // 业务代码样式随模块异步加载, 无需ExtractTextPlugin
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]_[hash:base64:8]'
          }
        }, 'postcss-loader', 'less-loader']
      }, { // less loader
        test: /\.(less)$/,
        exclude: ['./src/HtmlCssShare', './src/VueShare'],
        use: ExtractTextPlugin.extract({
          use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        })
      }, {
        test: /\.(html|tpl)$/,
        loader: 'html-loader?minimize=false'
      }, {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'iconfont/[name].[hash:base64:8].[ext]'
        }
      }, {
        test: /\.(svg|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:base64:8].[ext]'
        }
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  // devServer: {
  //   historyApiFallback: true
  // },
  plugins: [
    // // "production" | "development" | "none"
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('process.env.NODE_ENV')
    }),
    new ExtractTextPlugin('[name].css'),
    // 创建HtmlWebpackPlugin的实例
    new HtmlWebpackPlugin({
      title: 'vue-demo',
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html'),
      // 要把script插入到标签里
      inject: true,
      favicon: path.resolve('./icon.png')
    }),

    new HtmlWebpackPlugin({
      title: '404.html',
      filename: '404.html',
      template: path.resolve(__dirname, './static/404.html'),
      // 要把script插入到标签里
      inject: false,
      chunks: []
    })
    // 自动加载jquery，$,JQuery,window.jQuery变量都指向对应的node模块 jquery
    // new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery",
    //     "window.jQuery": "jquery"
    // })
  ]
};
