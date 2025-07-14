const express  = require('express');
const app = express();





app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(4001,()=>{
    console.log(`your server running on 4001`)
})

console.log();
