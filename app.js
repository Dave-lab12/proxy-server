const express = require('express')
const app = express();
const port = process.env.PORT || 3001

app.get('/',(req,res)=>{
    res.send('test')
})
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
    next();
  });
app.get('/',(req,res)=>{
    const u = req.query["u"];
  
    const url = `https://cross-pass.herokuapp.com/${u}`;

    request(url).pipe(res);
})

app.listen(port ,()=>console.log(`http://localhost:${port}`))