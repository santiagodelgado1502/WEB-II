const {datosUni} = require('../views/linkUni')

let sitiouni=''

for(sitios of datosUni.links){
  sitiouni+=`\n *Nombre sitio web:* ${sitios.nombreSitio} ➡ *🌐Enlace:* , ${sitios.enlace}`
} 

module.exports={
  sitiouni
}



