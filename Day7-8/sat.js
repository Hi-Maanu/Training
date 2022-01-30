var mysql = require('mySql'); 
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
   database:'toothsi_training'

});

module.exports= con;

// con.connect(function(error){
//     if(error){
//         throw error;
//     }
//     console.log("connected"); 
// });