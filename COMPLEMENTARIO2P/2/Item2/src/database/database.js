const mongoose = require('mongoose');

const {MONGO_URI}= require('../../config/index')

mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection.once('open', function() {
    console.log('Conectado a la base de datos');
}).on('error', function(error) {
    console.log('Error es: ', error);
});