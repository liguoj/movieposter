const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/',(ctx, next)=>{
    ctx.body = render('index',{
        title : 'Koa2 Test!'
    });
});

router.get('/user',(ctx, next)=>{
    ctx.body = render('user',{
        title : 'User Test!'
    });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(5001);