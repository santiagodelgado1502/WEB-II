const {smscliente} = require('./src/views/mensajes');
const {MenuSitiosUleam, MenuChatBot,MenuSinSalir} = require('./src/controllers/index') 
let {listclases}= require('./src/controllers/enlacesclases.controllers')
const {Menu} = require('./src/views/menu') 

const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');


const {NombreLinkClase} = require('./src/models')


const express = require('express');

const app =express();

app.use(express.json());
require('./src/database/database')
async function dataBD() {
        listclases = await require('./src/controllers/enlacesclases.controllers').ListEnlacesClases() ;         
        return listclases
}
dataBD();

const client = new Client();
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


client.on('ready', () => {
    console.log('Conexión establecida!');
});

client.on('message', message => {
	console.log(message.body);
});

let count_sms= 0;


client.on('message', message => {
    
    let mensajecliente  = message.body.toLowerCase(); 
	if(count_sms < 1  ){
        
		client.sendMessage(message.from, `${smscliente. mensajeBienvenida} \n ${MenuChatBot.menup}`);
        count_sms =count_sms +1;
	}   else if(count_sms == 1)
        {      
        switch(mensajecliente) {
                      
        case Menu.menuprincipal[0].opcionId:
                client.sendMessage(message.from,`*ENLACES WEB DE LA ULEAM*${MenuSitiosUleam.sitiouni} \n ENVIE *V* PARA VOLVER AL MENÚ PRINCIPAL `)
                break;
        case 'v':
                client.sendMessage(message.from, ` *MENÚ PRINCIPAL* ${MenuChatBot.menup}`)
                break;
        case Menu.menuprincipal[1].opcionId:
                
                client.sendMessage(message.from,`*USTED ESTÁ EN GUARDAR A TUS CLASES* \n ${smscliente.instruccionGuardarClases} `); 
                
                count_sms=2;
                break;
        case Menu.menuprincipal[2].opcionId:   
                 
                client.sendMessage(message.from, `*LISTA DE TUS CLASES* \n ${listclases} \n  \n \n *MENÚ PRINCIPAL* ${MenuChatBot.menup} 
                `);
                break;
        case Menu.menuprincipal[3].opcionId:
                client.sendMessage(message.from, `${smscliente.despedidaPrincipal} ` );
                count_sms=0;
                break; 
        default:
                client.sendMessage(message.from,`${smscliente.mensajeErrorPrincipal}. \n MENÚ PRINCIPAL ${MenuChatBot.menup}`)         
        }   
    } else if(count_sms==2) {
              
        var data = new NombreLinkClase({
                nombre_link_clase:message.body
                 })
            
        NombreLinkClase.create(data,()=>{
                 console.log('Clase y Link Universitario guardados en BD')
        });
     
        client.sendMessage(message.from,`${smscliente.confirmadoDeGuardadoClase}`);
        client.sendMessage(message.from,`ENVIE *V* O CUALQUIER MENSAJE PARA VOLVER AL MENÚ PRINCIPAL`);
        count_sms=3;
    } else if(count_sms==3) {
        dataBD();  
        client.sendMessage(message.from,`MENÚ PRINCIPAL ${MenuSinSalir.menusinexit}`);    
        count_sms=1;
    }
});

client.initialize();
