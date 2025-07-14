//woring of query params
//problem statement find the sum of two query params


const express = require('express');

const app = express();



app.get('/',(req,res)=>{
    res.send('this is root router')
})


app.get('/shop',(req,res)=>{
    const {num1,num2}=req.query
    let sum = Number(num1)+Number(num2)
    res.send(`sum is = ${sum}`)
})


const PORT = 4003;

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})
//http://localhost/shop?num1=5&num2=5  output==10