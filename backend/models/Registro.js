const mongoose = require('mongoose');

const RegistroSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    fechaNacimiento:{
        type:Date,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    contraseña:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('Registro', RegistroSchema);