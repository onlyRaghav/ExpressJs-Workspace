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



app.listen(5000);

console.log("The server is running on port 5000");