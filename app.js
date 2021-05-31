const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const axios = require("axios");
app.get("/", (req, res) => {
  res.send("Welcome!! type the url at the end of this url");
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
});

app.get(":endpoint([\\/\\w\\.-]*)", function (req, res) {
  let url = req.params.endpoint;
  url = url.substring(1);
  axios
    .get(url)
    .then((response) => {
      console.log(response);
      res.json(response.data);
    })
    .catch((error) => {
      res.json(error);
    });
});
app.listen(port, () => console.log(`http://localhost:${port}`));
module.exports = app;
