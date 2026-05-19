const express = require('express')

//creating server
const app = express();

app.get("/",(request,response)=>{
    response.send("Hello!");
});

//start server that listen on the port no. 3000
app.listen(3000);