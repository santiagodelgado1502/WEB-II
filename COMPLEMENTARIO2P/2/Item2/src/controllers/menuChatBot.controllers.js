const {Menu} = require('../views/menu')

let menup=''

for( menuprincipal of Menu.menuprincipal){
  menup+=`\n *${menuprincipal.opcionId}*.${menuprincipal.actividad}`
} 

module.exports={
  menup
}



