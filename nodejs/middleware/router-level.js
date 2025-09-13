//this is a example for router level middleware



const express = require('express');
const app = express();
const router = express.Router();


router.use((req, res, next) => {
  console.log(`Time: ${new Date().toISOString()} | Path: ${req.originalUrl}`);
  next(); 
});


router.get('/home', (req, res) => {
  res.send('Welcome to Home Page');
});

router.get('/profile', (req, res) => {
  res.send('This is your profile');
});


app.use('/user', router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


