const { query } = require('../lib/mysql');

const adminMovie = ctx => {
    var formData = JSON.stringify(ctx.request.body);
    console.log('resive form data: '+formData);

    async function insertNewMovie(values){
        let _sql = "insert into movie(movie_title,movie_director,movie_publish_date_str,movie_img) values(?,?,?,?);";
        let datalist = await query(_sql,values);
        return datalist
    }

    async function getData(values){
        let datalist = await insertNewMovie(values);
        console.log('dataList: \n');
        console.log(datalist);
    }

    getData([
        ctx.request.body.movie_title,
        ctx.request.body.movie_director,
        ctx.request.body.movie_publish_date_str,
        ctx.request.body.movie_img
    ]);

    ctx.body = "inserted a new row";

}

module.exports={
  adminMovie
}