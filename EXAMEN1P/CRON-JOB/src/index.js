const axios = require('axios').default;
const cheerio = require('cheerio');
const cron = require('node-cron');

cron.schedule('*/2 * * * *',async()=>{
  console.log(`Datos se cargan en base da datos cada 2 minutos fecha: ${new Date().toLocaleString()}`);
  const html = await axios.get('http://localhost:3000/');
  const $ = cheerio.load(html.data);
  const filas = $("tbody tr");
  const arreglo = [];
  filas.each((i, e)=>{
    const fila = $(e).text().toString().trim();
    const datos = fila.split('\n');
    const cine = {
      Idcliente: datos[0].trim(),
      TipoEntrada: datos[1].trim(),
      NoCliente: datos[2].trim(),
      Costo: parseInt(datos[3].trim().substring(1, datos[4].trim().length)),
      pelicula: datos[4].trim(),
      hora: datos[5].trim()
    }
    arreglo.push(cine);
  });

  await arreglo.forEach(async(e) =>{
    await axios.post('http://localhost:5000/api', e)
  })
})