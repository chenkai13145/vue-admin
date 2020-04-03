const path = require('path')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'?'./':'/',
  //publicPath: '/yjj-mkt/',
  outputDir:'dist', //build输出目录
  assetsDir:'static', //静态资源目录
    devServer: {
        proxy: {
            '/api': {
                target: 'https://zsyunjj.com/yjj/v1.4', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/',
                }
            }
        }
    },
    chainWebpack: (config)=>{
        //修改文件引入自定义路径
        config.resolve.alias
            .set('@', resolve('src'))
            .set('components', resolve('src/components'))
    }
}