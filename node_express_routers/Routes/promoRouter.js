const express = require('express');
const bodyParser = require('body-parser');
pr = express.Router();
pr.use(bodyParser.json());

pr.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    next();
}).get((req,res,next)=>{
    res.end('will send all the promotions to you');
}).post((req,res,next)=>{
    res.end('Will add the promotions: '+ req.body.name + ' with discription '+ req.body.discription);
}).put((req,res,next)=>{
    res.statusCode =403;
    res.end('Put operaton can not be performed');
}).delete((req,res,next)=>{
    res.statusCode = 403;
    res.end('Deleting all the promotions');
});



pr.route('/:promoid')
.all((req,res,next)=>{
    res.statusCode = 200;
    next();
}).get((req,res,next)=>{
    res.end('we will send all the details regarding '+ req.params.promoid +' to you');
}).put((req,res,next)=>{
    res.send('this is not supported for this');
}).post((req,res,next)=>{
    res.send('we will update the query regarding '+ req.params.promoid + ' with '+ 
    req.body.name +' and discription '+req.body.discription);
});
module.exports = pr;