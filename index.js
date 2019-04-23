const express = require('express')
const app = express();
const path = require('path')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));//joining to paths
  });
  app.use((req, res, next) => {
    //res.send("<h1>Page not found</h1>")
    // res.status(404).send("<h1>Page not found</h1>")
    console.log("404")
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  })
  
  app.listen(5000);