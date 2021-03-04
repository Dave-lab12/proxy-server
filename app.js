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
    const symbol = req.query["symbol"];
    const range = req.query["range"];

    const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${symbol}&types=quote,chart&range=${range}`;

    request(url).pipe(res);
})

app.listen(port ,()=>console.log(`http://localhost:${port}`))