const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/remotecontrol/' // 替换为你的 GitHub 仓库名称
    : '/',
  outputDir: 'docs',
  // 放置静态资源的目录
  assetsDir: 'assets',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 自定义主题变量
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
})
