const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function connect(){
    const db = mongoose.connect("paste connection path")
        .then(() => {
            console.log('connection sucessfull')
        }).catch((err) => {
            console.log("error in program",err)
        });
        return db;
}
connect();