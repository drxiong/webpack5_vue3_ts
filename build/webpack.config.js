const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")  //生成html文件  
const { CleanWebpackPlugin } = require("clean-webpack-plugin")  //清除打包后的文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")  //css抽离
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")  //css压缩


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]-[contenthash:8].js"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      },
      { 
        test: /\.css$/, 
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // 用MiniCssExtractPlugin.loader代替style-loader,可以让打包后的css文件独立出来
          }, 
          { 
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          { loader: "less-loader", options: { lessOptions: { javascriptEnabled: true } } }
        ]
      },
      {
        test: /\.(png|jpeg|svg|gif)$/,
        type: "asset/inline" ,
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          }
        }
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
       filename: "index.html",
       template: path.resolve(__dirname, "../public/index.html")
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
    new CssMinimizerPlugin({
      parallel: 4,
    })
  ],
  devServer: {
    // 当使用 [HTML5 History API] 时，任意的 `404` 响应被替代为 `index.html`
    historyApiFallback: true,
    // 自动打开浏览器
    open: true,
    // 热更新，默认为true
    hot: true,
    // 是否开启代码压缩
    compress: true,
    // 启动的端口
    port: 9999
  }
}