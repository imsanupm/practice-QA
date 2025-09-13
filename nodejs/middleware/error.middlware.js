//errro dandling middlware

const express = require('express');
const app = express();



app.get('/',(req,res)=>{

    res.send('hello world')
})
app.get('/home',(req,res)=>{
    throw new Error('errr for trigger middlware')
})

app.use((err,res,next)=>{
    if(err){
        res.status(500).send(err.messag)
    }
    next()
})

app.listen(4888,()=>{
    console.log(`server running on http://localhost:${4888} `)
});


