const http = require('http');




const app = http.createServer((req,res)=>{
    if(req.url=="/"){
     res.writeHead(200,{"content-type":"text/plain"})
     res.end("this is the root router")
    }else if (req.url=='/home'){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("this is home page")
    }else{
        res.writeHead(400,{"content-type":"text/plain"})
        res.end('Bad request')
    }
})

const PORT = 4002;

app.listen(PORT,()=>{
    console.log(`server rurrning on http://localhost:${PORT}`);
    
})
