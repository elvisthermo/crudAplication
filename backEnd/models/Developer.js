const mongoose = require('mongoose');

const DevSchema =  new mongoose.Schema({
    name:String,
    email:String,
    telefone:String,
    linkedin:String,
    cidade:String,
    estado:String,
    turno:String,
    habilidade:[String],
    nivel:Number
});

module.exports = mongoose.model('Developer',DevSchema);