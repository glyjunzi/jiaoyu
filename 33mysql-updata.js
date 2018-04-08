
let mysql = require('mysql');
//连接数据库
let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test1'
});
connection.connect();

//修改
let sql = "UPDATE users SET pwd=?,tel= ?,addr=? WHERE username='李彦宏'";
let arr = ['777','13513513511','中国江苏省苏州市xx镇'];
connection.query( sql,arr,function(err,res) {
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