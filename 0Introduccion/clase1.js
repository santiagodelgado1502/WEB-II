let prueba="5";
const persona = {
    nombre:"Santiago",
    apellido:"Delgado",
    esEstudiante: true,
    prueba,
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    },
    geolocalizacion:{
        lat:12.32,
        lng:45.88
    }
}

//const estudiante = {...persona};
//estudiante.nombre = "Jose";
//estudiante.apellido = "Anchundia"
//console.log(persona);
//console.log(estudiante);
//console.log(persona);
//console.log(persona.getNombreCompleto());

function mostrarDatos({nombre,geolocalizacion:{lat,lng}})
{
    console.log(nombre);
    console.log(lat)
    console.log(lng)
}
mostrarDatos(persona);

