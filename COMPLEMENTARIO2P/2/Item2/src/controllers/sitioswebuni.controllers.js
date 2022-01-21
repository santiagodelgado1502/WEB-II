const {datosUni} = require('../views/linkUni')

let sitiouni=''

for(sitios of datosUni.links){
  sitiouni+=`\n *Sitio web:* ${sitios.nombreSitio} ➡ *Link* , ${sitios.enlace}`
} 

module.exports={
  sitiouni
}



