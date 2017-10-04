const { query } = require('../lib/mysql');

const adminMovie = ctx => {
  var formData = JSON.stringify(ctx.request.body);
  console.log('resive form data: '+formData);

  // save data into database;
  async function findAllData() {
    let sql = 'SELECT * from movie';
    let datalist = await query(sql);
    return datalist
  }

  async function getData(){
    let datalist = await findAllData();
    console.log('dataList: \n');
    console.log(datalist);
    
  }
  getData();

  ctx.body = formData;
}

module.exports={
  adminMovie
}