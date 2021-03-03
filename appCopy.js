// 引入模块
const CreateError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
// 引入路由
const  indexRouter = require('./routes/index')
const  userRouter = require('./routes/users')

//实例化 express

const app = express();

//定义页面目录
app.set('views',path.join(__dirname,views))
//定义mobanyinq
app.set('view engine','jade')