const Agenda =[
    {
        id:1,
        Recordatorio:'Este es mi agenda',
        idautor:1
    },
    {
        id:2,
        Recordatorio:'Este es mi agenda',
        idautor:2
    },
    {
        id:3,
        Recordatorio: 'Este es mi agenda',
        idautor:3
    }
]
const Proietarios = [
    {
        id:1,
        nombre:'Pedro Miguel'
    },
    {
        id:2,
        nombre:'Juan AndrEs'
    },
    {
        id:3,
        nombre:'Julio Verne'
    }
]

async function buscarAgendaPorId(id){
    const agenda = Agenda.find((agenda)=>  agenda.id===id );
    if (!agenda)
    {
        const error = new Error();
        error.message="No encontramos el libro";
        throw error;
    }
    return agenda;
}
async function buscarPropietarioPorId(id){
    const propie = propie.find((propie)=>{ 
        return propie.id===id;
    })
    if (!propie)
    {
        const error= new Error();
        error.message="No encontramos el autor";
        throw error;
    }
    return propie;
}


Agenda.forEach( async (agenda)=>{
    const agendax = await  buscarAgendaPorId(agenda.id);
    console.log(agendax)
})

