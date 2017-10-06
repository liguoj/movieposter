const router=require('koa-router')();
const fs = require('fs');
const { query } = require('./lib/mysql');
const { adminMovie } = require('./router/admin') //admin router
const { adminList } = require('./router/list')

const home = ctx => {
  ctx.response.type = "html";
  ctx.response.body = "<h1> Hello world !!</h1>"
}
const admin = ctx => {
  ctx.response.type = "html";
  ctx.response.body = fs.createReadStream('./public/view/admin.html');
}

const upLoadImage = ctx => {
  console.log('ctx.request ==========');
  console.log(ctx.request);
  console.log(ctx.request.body);
  // => POST body
  ctx.body = JSON.stringify(ctx.request.body);
}

router
.get('/', home)
.get('/admin',admin)
.post('/admin/movie',adminMovie)
.get('/admin/list',adminList)
.post('/admin/uploadImage',upLoadImage)

module.exports=router