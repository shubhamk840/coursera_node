var http = require('http');
var fs = require('fs');
var path = require('path');


const hostname ='localhost';
const port ='3000';

const server = http.createServer((req,res)=>{
    console.log("Request for "+req.url + ' by method '+req.method);
    if(req.method=='GET')
    {
        var fileUrl;
        if(req.url =='/')
        fileUrl = '/index.html';
        else
        fileUrl = req.url;

        var filepath = path.resolve('./public'+req.url);
        const fileExt = path.extname(filepath);
        if(fileExt =='.html'){
            fs.exists(filepath,(exists)=>{
                if(!exists)
                {
                       res.statusCode =404;
                       res.setHeader('Content-Type','text/html');
                       res.end('<html><body><h1>file url not found</h1></body></html>');
                       return;
                }
                         res.statusCode = 200;
                         res.setHeader('Content-Type','text/html');
                         fs.createReadStream(filepath).pipe(res);
            });
        }
        else{
            res.statusCode =404;
                       res.setHeader('Content-Type','text/html');
                       res.end('<html><body><h1> file url not an html file</h1></body></html>');
        }
    }
    else{
        res.statusCode =404;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1> req method not supported/h1></body></html>');
    }
});


server.listen('8080','localhost',()=>{
    console.log('server has been connected');
});