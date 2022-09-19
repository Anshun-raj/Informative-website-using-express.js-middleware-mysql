var express=require("express");
const app=express();
var con=require('./mySql');
var bodyParser=require('body-parser');
var encoder=bodyParser.urlencoded();

var checkUrl=function(req,res,next){
    console.log('current url is',req.originalUrl);
    next();
} 
var router=express.Router();
app.set('view engine','ejs');

router.get('/',checkUrl,function(req,res){
    res.render('HomeData');
});

router.get('/home',checkUrl,function(req,res){
   res.render('HomeData');
});
router.get('/about',checkUrl,function(req,res){
    res.render('AboutData');
});

router.get('/cause',checkUrl,function(req,res){
    res.render('CauseData');
});

router.get('/cure',checkUrl,function(req,res){ 
    res.render('CureData');
});

router.get('/enquiry',checkUrl,function(req,res){
       res.render('EnquiryData');
});

router.post('/enquiry',encoder,checkUrl,function(req,res){
       console.log(req.body);
       var name=req.body.name;
       var city=req.body.city;
       var gender=req.body.gender;
       var age=req.body.age;
       con.connect(function(err){
         if(err) throw err;
              
         var sql="INSERT INTO viewer(name,city,gender,age) VALUES('"+name+"','"+city+"','"+gender+"','"+age+"')";
         var data="SELECT * from viewer";
         con.query(sql,function(err,res1){
            if(err) throw err;
            res.send("Data stored successfully ");  
        })
        con.query(data,function(err,res2){
            if(err) throw err;
            console.log(res2);
        })

        

    })
});

app.use('/',router); 
app.listen(5000);


