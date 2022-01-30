const http = require('http');
const module_imp = require('./Common_JS_mod.js');

// const server = http.createServer((req,res) => {
//     console.log(req.url , req.method , req.headers);
    
//     res.setHeader('Content-type' , 'text/html');

//     res.write('<html>');
//     res.write('<head><title> My First Page </title></head>'); 
//     res.write('<body> <h1> Hello from My Node.js Server ! </h1> </body>'); 
//     res.write('</html>');
//     res.end(); 
// });

// server.listen(3000);
console.log(module_imp);
