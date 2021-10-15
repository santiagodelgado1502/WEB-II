class Persona
{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    getNombreCompleto()
    {
        return this.nombre+" "+ this.apellido;
    }
}

const persona = new Persona("Mario","Holguin");
let nombre = persona.getNombreCompleto();
console.log(nombre);