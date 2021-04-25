/* // 引入模块
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
app.set('view engine','jade') */
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
//定义模板引擎
app.set('view engine','jade')

//定义日志打印级别
app.use(express.json());
// 使用 urlencoded 处理数据 querystring模块解析数据
app.use(express.urlencoded({extended:false}))
// 定义使用cookie处理对象
app.use(cookieParser())
// 定义静态资源目录public
app.use(express.static(path.join(__dirname,'public')))
// 定义路由
app.use('/',indexRouter)
app.use('/users',userRouter)
//错误页面处理
app.use(function(req,res,next){
    // 设置locals  只在开发环境生效
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') == 'development'? err : {}
    // 返回错误状态码
    res.status(err.status || 500 )
    res.render('error')
})
module.exports = app ;