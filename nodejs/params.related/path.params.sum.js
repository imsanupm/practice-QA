const express = require('express');
const app = express();
const PORT = 3000;

app.get("/home/:valueOne/:valueTwo",(req,res)=>{
    const {valueOne,valueTwo} = req.params;  
    console.log(valueOne,valueTwo)
    let sum = Number(valueOne)+Number(valueTwo);

    res.send(`the sum is  ${sum}` );
   

})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

