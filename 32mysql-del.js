
let mysql = require('mysql');
//连接数据库
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test1'
});
connection.connect();

//删除
let sql = "DELETE FROM users WHERE id = '11'";
connection.query( sql,function(err,res) {
    if (err) throw err;
    // OkPacket {
    //     fieldCount: 0,
    //         affectedRows: 1,
    //         insertId: 10,
    //         serverStatus: 2,
    //         warningCount: 0,
    //         message: '',
    //         protocol41: true,
    //         changedRows: 0 }
    console.log(res);
});
connection.end()