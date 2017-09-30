const Koa = require('koa');
const Router = require('koa-router');
const koaStatic = require('koa-static');
const koaBody = require('koa-body');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const bodyParser = require('koa-bodyparser');
const path = require('path');


const app = new Koa();
const router = new Router();
const config = require('./src/config');
const myRouter = require('./src/Router');

const sessionMysqlConfig = {
    user:config.database.USERNAME,
    password:config.database.PASSWORD,
    database:config.database.DATABASE,
    host:config.database.HOST
}

app.use(session({
    key:"USER_SID",
    store:new MysqlStore(sessionMysqlConfig)
}))

app.use(koaStatic(
    path.join(__dirname,'./public/view')
))

app.use(bodyParser());
app.use(myRouter.routes()).use(router.allowedMethods());

app.listen(config.port);
console.log(`koa server is listening on port ${config.port}`);