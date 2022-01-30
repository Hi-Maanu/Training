const { Route } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
//MIDDLEWARE
const himanshuMiddleware = (req,res,next)=>{
    console.log(req);
    next()
};



//app.use(himanshuMiddleware);

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!'+req.params.name);
});

app.get('/about', (req,res) => { 
    res.sendfile(path.join(__dirname , 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});