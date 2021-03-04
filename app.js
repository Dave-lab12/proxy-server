const express = require('express')
const app = express();
const port = process.env.PORT || 3001
const axios = require('axios')
app.get('/',(req,res)=>{
    res.send('test')
})
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
    next();
  });
// app.get('/',(req,res)=>{
//     const u = req.query["u"];
//   console.log(req);
//     // const url = `https://cross-pass.herokuapp.com/${u}`;

//     // request(url).pipe(res);
// })
app.get(':endpoint([\\/\\w\\.-]*)', function(req,res){

    let url = req.params.endpoint
    url = url.substring(1)
    console.log(url);
    axios.get(url).then(response =>{
        res.json(response.data)
    }).catch(error=>{
        res.json(error)
    })

})
//https://api.deezer.com/chart
app.listen(port ,()=>console.log(`http://localhost:${port}`))