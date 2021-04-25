var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index',{
    'title':'hello cici',
    'name':'cici',
    'age':'8',
    'hight':166,
    'classNum':'9',
    'favorName':'blue',
    'data':[
      {
        name:'red',
        age:10,
        hobby:['sing','dance','coding']
      },
      {
        name:'yellow',
        age:10,
        hobby:['sing','dance','coding']
      },
      {
        name:'blue',
        age:10,
        hobby:['sing','dance','coding']
      }
    ]
  })
});

router.get('/world',function(req,res,next){
  res.render('index',{
    'title':'hello cici',
    'name':'cici',
    'age':'8',
    'hight':'167'
  })
})
//查看请求url 带参数 不带参数
router.get('/abc',function(req,res,next){
  console.log(req.url)
  console.log(req.query)
  res.send('get req.url')
})
// 占位
router.get('/bcd:id',function(req,res,next){
  console.log(req.url)
  console.log(req.query)
  res.send('get req.url')
})

router.get('/car',function(req,res,next){
  console.log('这里是中间件')
  next()
},function(req,res,next){
  // console.log('这里是中间件')
  res.send('向页面发送数据')
})

module.exports = router;
