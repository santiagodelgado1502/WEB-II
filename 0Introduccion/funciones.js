function saludar(nombre)
{
    return `Hola como estas ${nombre}`;
}

const saludar2 = function (nombre)
{
    return `Hola como estas ${nombre}`;
}

const saludar3 = (nombre)=>{
    return `Hola como estas ${nombre}`;
}
function mostrarFuncionParaSaludar(fn,parametro){
    console.log(fn(parametro));
}

mostrarFuncionParaSaludar(saludar2,'Santiago');
