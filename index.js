var koa = require('koa');
var app = new koa();
const path = require('path')
const Router = require('koa-router')//引入路由中间件
const pub = require('koa-static')
const cors = require('koa2-cors')
import index from './router/index.js'
const staticPath = './views/dist'



let router = new Router()
router.use('/api', index.routes(), index.allowedMethods())
// router.use('/aaa', index.routes(), index.allowedMethods())
app.use(cors());
// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())
app.use(pub(
    path.join(__dirname, staticPath)
))

let port = process.env.PORT || 3000;
console.log("开启成功 &&  port is " + process.env.PORT);

app.listen(port);



