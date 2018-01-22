# reactDemo
react学习项目

一、目录说明
* dist:发布目录、包含index.html、打包后生成的bundle.js
* src：项目源代码
* index.js入口文件，在webpack.config.js中指定
* webpack.config.js webpack-dev-server配置文件

二、项目搭建
* 搭建react环境
```
npm install --save react
npm install --save react-dom
```
* 编写react代码
* webpack-dev-server安装
```
    npm install --save-dev webpack-dev-server
```
* webpack.config.js配置
```
安装Babel转码器，代码中加载 ES2015+ 代码，需要使用 Babel 转译为 ES5，可以使用babel-loader，对应配置参考webpack.config.js（https://doc.webpack-china.org/loaders）

npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack —save-dev

安装react转码规则,对应配置参考webpack.config.js
npm install @babel/preset-react --save-dev
```