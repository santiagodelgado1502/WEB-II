const {MenuNoSalida} = require('../views/menu')

let menusinexit=''

for( sinexit of MenuNoSalida.menuprincipal){
    menusinexit+=`\n *${sinexit.opcionId}*.${sinexit.actividad}`
} 


module.exports={
  menusinexit
}
