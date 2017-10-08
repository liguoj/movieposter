const { query } = require('../lib/mysql');

// async 配合 await 使用
async function adminList(ctx) {
    ctx.set("Access-Control-Allow-Origin", "*");
    let _sql = "select * from movie";
    ctx.body = await query(_sql);
}

module.exports={
  adminList
}