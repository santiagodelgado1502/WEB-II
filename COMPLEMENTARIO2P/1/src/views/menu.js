
var MenuChatBot = {
    menuprincipal:[ 
        {opcionId:'1', actividad:'Ver enlaces web de la ULEAM'},
        {opcionId:'2', actividad:'Guardar enlaces de las clases'},
        {opcionId:'3', actividad:'Ver enlaces a tus clases'},
        {opcionId:'salir', actividad:'Despirdese del chatbot'},
    ],
}

var MenuChatBotSinSalida = {
    menuprincipal:[ 
        {opcionId:'1', actividad:'Ver enlaces web de la ULEAM'},
        {opcionId:'2', actividad:'Guardar enlaces de las clases'},
        {opcionId:'3', actividad:'Ver enlaces a tus clases'},
    ],
}




module.exports={
   Menu:MenuChatBot,
   MenuNoSalida:MenuChatBotSinSalida
}
