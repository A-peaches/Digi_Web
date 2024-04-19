const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'qwe123!@#',
    database: 'mydb'
})

connection.connect();

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

app.get('/query', (req,res)=> {
    console.log('query');
    let responseData = {};
    
    connection.query('SELECT * FROM EMP',(err,rows)=> {
        if(err) throw err;
        if(rows[0]){
            console.log(rows[0]);
            responseData.data = rows;
            responseData.state =  'ok';
        } else {
            responseData.state = 'none';
        }

        res.json(responseData);
    });
    
})

app.get('/query2', (req,res)=> {
    console.log('req.query');
    console.log('query');
    let responseData = {};
    let job = req.query.job;
    let  empNo = req.query.empNo;

    
    connection.query('SELECT * FROM EMP WHERE JOB="'+job+'" AND EMPNO = "'+empNo+'"',(err,rows)=> {
        if(err) throw err;
        if(rows[0]){
            console.log(rows[0]);
            responseData.data = rows;
            responseData.state =  'ok';
        } else {
            responseData.state = 'none';
        }

        res.json(responseData);
    });
    
})

app.get('/query3', (req,res)=> {
    console.log('req.query');
    console.log('query');
    let responseData = {};
    let job = req.query.job;
    let empNo = req.query.empNo;

    let query = 'SELECT * FROM EMP WHERE JOB= ? AND EMPNO= ?'

    connection.query(query,[job , empNo],(err,rows)=> {
        if(err) throw err;
        if(rows[0]){
            console.log(rows[0]);
            responseData.data = rows;
            responseData.state =  'ok';
        } else {
            responseData.state = 'none';
        }

        res.json(responseData);
    });
    
})

app.get('/query4', (req,res)=> {
    console.log('query');
    let responseData = {};
    let query = 'SELECT * FROM EMP WHERE SAL > ?'

    connection.query(query,[500],(err,rows)=> {
        if(err) throw err;
        if(rows[0]){
            console.log(rows[0]);
            responseData.data = rows;
            responseData.state =  'ok';
        } else {
            responseData.state = 'none';
        }

        res.json(responseData);
    });
    
})

app.post('/insert', (req,res)=>{
    let data = req.body;
    let deptNo = data.deptNo;
    let dname = data.dname;
    let loc = data.loc;
    console.log(deptNo,dname,loc);

    let query = 'insert into DEPT (DEPTNO, DNAME, LOC) values (?, ?, ?)';

    connection.query(query,[deptNo, dname,loc],(err,result,fields)=> {
        if(err) throw err;
        console.log(result);
    })
})

// promise
app.get('/promise', async (req, res) => {
    try {
        let val = await third();  // await를 사용하여 비동기 함수 third의 결과를 기다립니다.
        console.log('promise');
        console.log(val);
        res.send(val);  // 성공적으로 결과를 받으면 응답을 클라이언트에 보냅니다.
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server Error');  // 오류가 발생하면 500 상태 코드와 함께 오류 메시지를 보냅니다.
    }
});

function second() {
    let query = 'SELECT COUNT(*) FROM EMP';
    connection.query(query,(err, rows) => {
        if(err) throw err;
        if(rows[0]) {
            console.log(rows[0]);
            return rows[0];
        }
        //res.json(responseData);
    })
}
function third() {
    return new Promise((resolve, reject) => {
        let query = 'SELECT COUNT(*) FROM EMP';
        connection.query(query, (err, rows) => {
            if(err) {
                reject(err);  // 오류가 발생하면 reject를 호출하여 오류를 처리합니다.
            } else if (rows[0]) {
                console.log(rows[0]);
                resolve(rows[0]);  // 결과가 있으면 resolve를 호출하여 결과를 반환합니다.
            } else {
                reject(new Error("No results found"));  // 결과가 없으면 오류를 반환합니다.
            }
        });
    });
}