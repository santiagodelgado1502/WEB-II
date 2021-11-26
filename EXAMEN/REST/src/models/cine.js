const mongoose = require("mongoose");
const {Schema} = mongoose;

const cineSchema = new Schema({
    Idcliente: String,
    TipoEntrada: String,
    NoCliente: String,
    Costo: Number,
    Pelicula: String,
    hora: String,
    tipoError: {
        type: String,
        default: null
    }
});

 module.exports = mongoose.model('cines',cineSchema);