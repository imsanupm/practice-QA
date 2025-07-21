//example for write file 


const fs = require('fs')

fs.writeFile('./hello.js',"console.log()",(error)=>{
    if(error){
        console.log('error during write file ',error);
        
    }
    console.log('file writed successfully');
    
})

