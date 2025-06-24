const express = require("express");
const app = express(); //created an express application

// app.use("/",(req,res)=>{
//     res.send("Hello Home!"); the '/' route is going to be of highest priority,
//     so it will only resspond no matter whateer other route is being requested, this route if defined
//     will end up responding. only if it is placed in the end, all other routes will work.
// });

// app.use("/home",(req,res)=>{
//     res.send("Hello Home!"); //as long as this is on top and matches the url, any get, post,put,
//delete calls ont work becz this matches app.use the url and responds.
// });
app.get("/user/:userId/", (req,res) => {
    console.log(req.params); //to get query parameters
  res.send({ firstName: "John", lastName: "Doe" }); //send a JSON response
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
