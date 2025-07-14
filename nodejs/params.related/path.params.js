const express  = require('express');
const app = express();



app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/shop/:name',(req,res)=>{
     const {name} = req.params
     res.send(`welcome to shop page ${name}`)
})

app.listen(4004,()=>{
    console.log(`your server running on 4004`)
})


