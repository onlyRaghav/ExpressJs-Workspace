const express = require('express')
const app = express();
const router= require('./routing');

app.use('/',router);

// The code below defines the route to get client request using http methods

// app.get("/",(req,res)=>{
//     res.send("<h1>Hello ExpressJs!</h1>")
// });
// app.post("/",(req,res)=>{
//     res.send("You just called a post request on '/' route");
// })


// Dynamic Url buliding and accessing its parameters
app.get("/:id",(req,res)=>{
    res.send("Your requested id is: " + req.params.id);
})

app.get("/:id/:name",(req,res)=>{
    res.send("id: " + req.params.id + " Name: " + req.params.name);
})

// this will execute when the above stated route doesn't match
app.get("*",(req,res)=>{
    res.send("This is an invalid url");
})

app.listen(5000);

console.log(`App is working on http://localhost:5000`);