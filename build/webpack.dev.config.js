// 预留开发环境相关配置
module.exports = {
  cache: {
    // 缓存, 二次快速启动
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
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
