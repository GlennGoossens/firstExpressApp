var express = require("express");
var app = express();

console.log("app started!");

app.get("/",function(req,res){
  res.send("Hi there!");
});

app.get("/bye",function(req,res){
  res.send("Goodbye!!");
});

app.get("/dog",function(req,res){
  res.send("MEOW!!")
});


app.get("*",function(req,res){
  res.send("404 error not found");
});

app.listen(3000,function(){
  console.log("app running on port 3000");
});
