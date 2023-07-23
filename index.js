var express = require("express");
const app=express();
const port = 1200;

app.get("/",(req,res)=>{
    res.send("Server created successfully by Express Method!!");
});
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);

});
