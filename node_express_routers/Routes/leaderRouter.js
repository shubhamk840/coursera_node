const express = require('express');
const bodyParser = require('body-parser');
leaderroutes = express.Router();
leaderroutes.use(bodyParser.json());

leaderroutes.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    next();
}).get((req,res,next)=>{
    res.end('will send all the leaders to you');
}).post((req,res,next)=>{
    res.end('Will add the leaders: '+ req.body.name + ' with discription '+ req.body.discription);
}).put((req,res,next)=>{
    res.statusCode =403;
    res.end('Put operaton can not be performed');
}).delete((req,res,next)=>{
    res.statusCode = 403;
    res.end('Deleting all the promotions');
});



leaderroutes.route('/:lid')
.all((req,res,next)=>{
    res.statusCode = 200;
    next();
}).get((req,res,next)=>{
    res.end('we will send all the details regarding '+ req.params.lid +' to you');
}).put((req,res,next)=>{
    res.send('this is not supported for this');
}).post((req,res,next)=>{
    res.send('we will update the query regarding '+ req.params.lid + ' with '+ 
    req.body.name +' and discription '+req.body.discription);
});
module.exports = pr;