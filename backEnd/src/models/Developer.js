const mongoose = require('mongoose');

const DevSchema =  new mongoose.Schema({
    name:String,
    email:String,
    telefone:String,
    linkenid:String,
    cidade:String,
    estado:String,
    turno:String,
    node:Number,
    angular:Number,
    banco_de_dados:Number,
    html:Number,
    css:Number
    
});

module.exports = mongoose.model('Developer',DevSchema);