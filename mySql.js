var mySql=require('mysql');
const con=mySql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"test"
});
module.exports=con;