
const Mascota = {
    Nombre:'LUCKY',
    Edad:'5',
    Color:'NEGRO',
};

const comida = [
    "Pescado",
    "Pollo",
    "Carne"
];

i=0;
do{
    console.log(comida[i]);
    i++;
}while(i<3);

console.log(comida.map(comida => comida.toUpperCase));





