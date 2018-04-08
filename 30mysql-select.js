
let mysql = require('mysql');
//连接数据库
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test1'
});
connection.connect();

//查询
connection.query('SELECT * FROM users ORDER BY `id` ASC',function(err,res,field) {
    if(err) throw err;
    console.log(res);
    console.log(typeof res);
});
connection.end()