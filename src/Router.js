const router=require('koa-router')();
const fs = require('fs');

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
.post('/admin/uploadImage',upLoadImage)

module.exports=router