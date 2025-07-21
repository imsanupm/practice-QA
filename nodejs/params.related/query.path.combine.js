//problem finding the sum of query params and path prams    


const express  = require('express');
const app = express();



app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/shop/:num1',(req,res)=>{
    const {num1} = req.params;
    const {num2 } = req.query;
    let sum = Number(num1)+Number(num2);
    res.send(`total sum = ${sum}`);

})

app.listen(4005,()=>{
    console.log(`your server running on 4005`)
})

//http://localhot4005:/shop/5/?num2=5        output==10


