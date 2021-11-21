
const express  = require("express");
const cors = require("cors");

const app =  express();
const PUERTO =  3000;

let agenda = [];

app.use('/public', express.static(__dirname+'/public') )
app.use(cors()).use(express.json())


app.get('/', (req,res)=>{
    res.status(200).send(
        agenda
    )
})
app.get('/:propietario', (req,res)=>{
    const {propietario} =  req.params;
    let resultado = estudiantes.filter(p => p.propietario === propietario);
    if (resultado.length>0)
    {
        res.status(200).send(resultado[0]);
    }
    res.status(404).send({
        "mensaje":"No se puede encontrar el elemento"
    });


})
app.post('/', (req,res)=>{
    const {body} = req;
    
    agenda.push(body);
    res.status(200).send({
        mensaje:"dato insertado correctamente",
        repuesta: body
    })
})
app.put('/', (req,res)=>{
    const {propietario, descripcion} = req.body;
    let agenda =  agenda.filter(p=> p.propietario === descripcion)[0]
    agenda.propietario = propietario;
    agenda.descripcion = descripcion;
    res.status(200).send(
        {
            mensaje:"dato modificado correctamente",
            respuesta: agenda
        }
    )

})
app.delete('/:propietario', (req,res)=>{
    const {cedula} =  req.params;
    let resultado = agenda.filter(p => p.propietario !== propietario);
    res.status(200).send({
        respuesta:"Eliminado el estudiante correctamente"
    })
})


app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})