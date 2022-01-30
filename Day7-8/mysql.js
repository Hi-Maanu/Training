const express = require('express'); 

const mysql = require('mysql'); 
const dbConnect = require('./mongo');

const con = require('./sat.js');

const app = express(); 


// create Connection 
con.connect(function(error){
        if(error){
            throw error;
        }
        console.log("connected"); 
    });

    app.get('/createDb' , (req,res) =>{
        let sql = 'Create Database nodemysql';
        con.query(sql , (err,result) =>{
            if(err) throw err;
            else console.log("Created");
        })
    })

    app.get('/createposttable' , (req,res) => {
        let sql = `Create table posts(
            id int  Auto_increment ,
            title Varchar(20) , 
            body varchar(200), 
            Primary Key(id)
        )`   ;

        con.query(sql , (err , result) => {
            if(err) throw err; 
            console.log(result);
            res.send('Post Table Created');
        });
     });

     // select data 
     app.get('/getData' , (req , res) => {
         let sql = `Select * from users`;
         let q = con.query(sql , (error , result) =>{
             if(error) throw error; 
             else{
                 console.log(result);
             }
         });
     });

app.listen(3000 , ()=>{
    console.log('Server started on Port 3000');
});