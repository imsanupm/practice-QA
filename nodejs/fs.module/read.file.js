const { error } = require('console');
const fs = require('fs')


fs.readFile('./write.file.js','utf-8',(error,data)=>{
    if(error){
        console.log('error during readfile',error);
    }
    console.log(data);
    
})