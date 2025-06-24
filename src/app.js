const express = require('express');
const app = express(); //created an express application

app.use("/home",(req,res)=>{
    res.send("Hello Home!"); //send a response to the client
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});