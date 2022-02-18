const path = require("path"); //Node.js内置模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js', //配置入口文件
    output: {
        path: path.resolve(__dirname, './dist'), //输出路径，__dirname：当前文件所在路径
        filename: 'bundle.js' //输出文件
    },
    module: {
        rules: [  
            {  
                test: /\.css$/,    //打包规则应用到以css结尾的文件上,通过正则来匹配
                // 使用loader进行处理
                // 注意执行顺序,后面的先执行
                use: [
                    'style-loader', // 创建style标签,将js中的样式资源写入,应用到页面中
                    'css-loader' // 将css文件变成commonJs模块加载到js中,里面的内容是样式字符串
                ] 
            },
            {  
                test: /\.less$/,    //打包规则应用到以css结尾的文件上,通过正则来匹配

                // 使用loader进行处理
                // 注意执行顺序,后面的先执行
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ] 
            },  
        ]  
    },
    plugins: [
        // 创建一个空的HTML文件,自动将打包的js文件引入(js/css)
        new HtmlWebpackPlugin({
            // 复制该文件,自动将打包的js文件引入(js/css)
            template: './index.html'
        })
    ],
}
