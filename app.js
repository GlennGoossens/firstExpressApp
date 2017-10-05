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

app.get("/r/:subredditName",function(req,res){
  var subreddit = req.params.subredditName;
  res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
});

app.get("/r/:subredditName/comments/:id/:title/",function(req,res){
  res.send("Welcome to the comments page");
});

app.get("*",function(req,res){
  res.send("404 error not found");
});

app.listen(3000,function(){
  console.log("app running on port 3000");
});
