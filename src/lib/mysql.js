var mysql = require('mysql');
var config = require('../config');

var pool = mysql.createPool({
    host:config.database.HOST,
    user:config.database.USERNAME,
    password:config.database.PASSWORD,
    database:config.database.DATABASE
});

let query = function(sql,values){
    return new Promise((resolve,reject) => {
        pool.getConnection(function(err,connection){
            if(err){
                resolve(err)
            }else{
                connection.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    });
};

let insertMovie = function( value ) {
  let _sql = "insert into movie(movie_title,movie_director,movie_publish_date_str,movie_img) values(?,?,?,?);";
  return query( _sql, value )
}


module.exports={
  query,
  insertMovie
}