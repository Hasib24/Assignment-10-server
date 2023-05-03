const express = require('express');
const app = express();
const port = 5000;

const chef = require('./data/shef.json')

app.get('/', (req, res)=>{
    res.send('Express server is running!')
})

app.get('/chef', (req, res)=>{
    res.send(chef)
})


app.listen(port, ()=>{
    console.log(`Server is running at port : ${port}`);
})