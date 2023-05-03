const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')

app.use(cors())

const chefs = require('./data/shefs.json')

app.get('/', (req, res)=>{
    res.send('Express server is running!')
})

app.get('/chef', (req, res)=>{
    res.send(chefs)
})

app.get('/chefrecipes/:id', (req, res)=>{
    let id = req.params.id;
    res.send(chefs.find(chef => chef.id == id))
})



app.listen(port, ()=>{
    console.log(`Server is running at port : ${port}`);
})