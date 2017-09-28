const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const fs = require('fs');
const koaBody = require('koa-body');
const app = new Koa();
const router = new Router();

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
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);