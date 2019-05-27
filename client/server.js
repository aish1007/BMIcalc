var express = require("express");
var app     = express();
var path    = require("path");
var cors = require('cors');

app.use(cors());

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/home.html'));
});

app.listen(8080);

console.log("Running at Port 8080");