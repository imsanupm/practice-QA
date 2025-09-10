const router  = express.Router();

router.use((req,res,next)=>{
    console.log(req.url , req.method);
});

router.get("/",()=>{
    console.log('you getting call from the home page');
});


//this is a simple implimentaion of router level middlware
