const express = require('express')

//creating server
const app = express();

//give express power to read client request body
app.use(express.json());

//created a blank notes array
const notes = [];

//api to create note
app.post('/createNote', (req, res) => {
    notes.push(req.body);
    res.send("note created");
});

//api to read all the notes
app.get('/getNotes', (req, res) => {
    res.send(notes);
});

//start server that listen on the port no. 3000
app.listen(3000, () => {
    console.log("server running on port no. 3000...");
});