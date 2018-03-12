//express code goes here

const port  = 4020;
const cors= require('cors');
const bodyParser= require('body-parser');
const express = require('express');
const app = express();
const ctrl = require('./ctrl');


app.use(cors());
app.use(bodyParser.json());


app.get('/api/joke', ctrl.theJokes)
app.post(`/api/fav`, ctrl.newFave)


app.listen(port,()=>console.log("I can't believe we're listening to port "+port))