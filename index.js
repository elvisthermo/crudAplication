const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const routes = require('./backEnd/routes/routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://thermo:root@cluster0-dlehv.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());

app.use(express.json());
app.use(routes);


let port = 8000

app.listen(port,()=>{
    console.log("server is run "+port)
});