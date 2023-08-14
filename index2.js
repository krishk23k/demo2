let express = require('express');
let app = express();
db = require('../demo2/connection');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Userschema = new mongoose.Schema({
    name : String,
    age : Number, 
    class : Number,
    roll_no:Number,
    marks : {type:mongoose.Schema.Types.Array},
    result : String,
    percentage : Number
})

app.post('/insert',async(req,res)=>{
    const User = mongoose.model('user',Userschema);
    const ro = await User.find({name:req.body.name, age:req.body.age , class:req.body.class , roll_no:req.body.roll_no});
    if (ro.length == 0){
    const da = await User.insertMany({name:req.body.name, age:req.body.age , class: req.body.class , marks:req.body.marks});
    res.send(da)
    }
    else{
    res.send({error : "data already in database"})
    }
})

app.post('/find',async(req,res)=>{
    const User = mongoose.model('user',Userschema);
    const ro = await User.find({name:req.query.name})
    res.send(ro)
})

app.post('/update',async(req,res)=>{
    const User = mongoose.model('user',Userschema);
    const ro = await User.updateMany({name:req.query.name},{"$set":{name:req.body.name, age:req.body.age , class: req.body.class , marks:req.body.marks}});
    res.send(ro)
})

app.post('/delete',async(req,res)=>{
    const User = mongoose.model('user',Userschema);
    const ro = await User.deleteMany({name:req.query.name});
    res.send(ro)
})

app.post('/percentage',async(req,res)=>{
    const User = mongoose.model('user',Userschema);
    const ro = await User.find({name:req.query.name});
    let totalget = 0;
    let totalmark = 0;
    for(mark of ro[0].marks){
        totalget += mark.obtainmarks;
        totalmarks += mark.totalmark;
    }
    let per = (totalget/totalmarks)*100;
    res.send({percentage:per})
})

const server = app.listen(port,()=>{
    const post = server.address().address;
    const Port = server.address().port
})