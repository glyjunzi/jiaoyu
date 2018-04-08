
let mysql = require('mysql');
//连接数据库
function mysqlInsert(host,user,password,database,sql){
    let _res;//定义一个表示本次数据库插入成功与否的标志
    let connection = mysql.createConnection({
        host:host,
        user:user,
        password:password,
        database:database
    });
    connection.connect();

//添加
    //let sql = "INSERT INTO `users`(`username`,`pwd`,`tel`,`addr`) VALUE ('李彦宏','liyanhong','123456','北京')"

    connection.query( sql,function(err,res) {
        if(err) {
            _res=0;
            throw err;
        }
        _res=1;
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
        console.log(typeof res);
    });
    connection.end()
    return _res
}

exports.mysqlInsert = mysqlInsert;