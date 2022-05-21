const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css抽离
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // css压缩
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[contenthash:8].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue?$/,
        use: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader // 用MiniCssExtractPlugin.loader代替style-loader,可以让打包后的css文件独立出来
          },
          {
            loader: 'css-loader',
            // options: {
            //   modules: true
            // }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          { loader: 'less-loader', options: { lessOptions: { javascriptEnabled: true } } }
        ]
      },
      {
        test: /\.(png|jpeg|svg|gif)$/,
        type: 'asset/inline',
        parser: {
          // 转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024 // 25kb
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    }),
    new CssMinimizerPlugin({
      parallel: 4
    }),
    new VueLoaderPlugin()
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
