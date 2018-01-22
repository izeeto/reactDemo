const path = require('path');
module.exports = {
    entry:'./index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')//当前文件所在目录的绝对路径/dist/bundle.js
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),//指定本地Server从哪里加载文件到localhost:port上
        port:9001,//指定端口号，默认是8080
        open:true//在浏览器中打开
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,//需要转译的文件类型
                exclude:/(node_modules|bower_components)/,//不转译指定目录下的js、jsx类型文件，不然会很慢
                use:{
                    loader:'babel-loader',//已经安装的babel加载器
                    options:{
                        //配置转码规则，比如preset-react是用于React的转码规则
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            }
        ]
    }
}