const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors()); // cors 설정

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, ()=>{
        console.log('node start');
});

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/test',(req,res)=>{
    let obj = {};
    obj.result= 'ok';
    res.json(obj);
})

app.get('/name',(req,res)=>{
    let name = {};
    name = '김근미';
    res.json(name);
})

app.get('/get1', (req,res)=> {
    console.log(req.query);
    
})

app.post('/post1', (req,res)=> {
    console.log('post1 도착');
    console.log(req.body);
    let name = req.body.name;//흰둥이
    let obj = {};
    obj.result = name; //object에 흰둥이 쏘옥
    res.json(obj);
})