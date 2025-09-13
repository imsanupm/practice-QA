const express = require('express');
const app = express();
const PORT = 3000;


app.use((req,res,next)=>{
    // this middlware will block 
    if(req.method==="GET" && req.url==="/cart"){
        return res.status(403).send('GET request and /cart router are blocked')
    }
    next()
})


app.get('/',(req,res)=>{
    res.send('hellow world');
})


app.get('/cart', (req,res)=>{
    res.send("hellow world")
})    


app.get('/home',(req,res)=>{
    
    res.send('hellow world')
})


app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});



