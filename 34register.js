
const express = require('express');
const bodyParser = require('body-parser');
let mysqlInsert = require('./31mysql-insert');
console.log(mysqlInsert.mysqlInsert)
let urlencodedParser = bodyParser.urlencoded({extended:false})
const pi = 3.141592665358
const e = 2.718

let app =express()
app.use(express.static("static"))
app.get('/',function(req,res){
    res.sendFile(__dirname + "/static/login/regi.html")
})

app.post('/register',urlencodedParser,function (req,res) {
    console.log(req.body)
    //插入注册信息到数据库
    let username = req.body.username;
    let pwd = req.body.pwd;
    let tel = req.body.tel;
    let addr = req.body.addr;
    //mysqlInsert(host,user,password,database.sql)
    let sql = "INSERT INTO users(username,pwd,tel,addr) VALUE ('"+username+"','"+pwd+"','"+tel+"','"+addr+"')"
    let _res = mysqlInsert('localhost','root','root','test1',sql)
    console.log(_res)
    if(_res){
        res.json({"data":1})
    }else{
        res.json({"data":0})
    }

   // res.json({"data":1})
})

let s = app.listen('3000',function(){
    console.log("listen @3000")
})