let express = require('express');
let app = express();
db = require('../demo2/connection');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/:id',(req,res)=>{
    let a ;
    if (req.params.id==':+'){
        a = parseInt(req.query.num1)+parseInt(req.query.num2)
    }
    else if (req.params.id==':-'){
        a = parseInt(req.query.num1)-parseInt(req.query.num2)
    }
    else if (req.params.id==':*'){
        a = parseInt(req.query.num1)*parseInt(req.query.num2)
    }
    else if (req.params.id==':%'){
        a = parseInt(req.query.num1)/parseInt(req.query.num2)
    }
    res.send({a:a})
})

const server = app.listen(port,()=>{
    const post = server.address().address;
    const Port = server.address().port
})