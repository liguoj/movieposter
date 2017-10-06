const { query } = require('../lib/mysql');

const adminList = ctx => {

    async function getAllData(){
        let _sql = "select * from movie";
        let datalist = await query(_sql);
        return datalist
    }

    async function getData(){
        let datalist = await getAllData();
        console.log('dataList: \n');
        console.log(datalist);
        ctx.body = datalist;
    }

    ctx.body = getAllData();

}

module.exports={
  adminList
}