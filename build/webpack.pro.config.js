const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // 每次编译删除旧的，只保留最新的
  plugins: [new CleanWebpackPlugin()]
}
