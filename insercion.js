const models = require('./models');
const Activo = models.Activo;

async function insertar () {
    const persona = await models.Persona.create({
        nombre: 'Herick',
        apellido: 'Flores',
        email: 'test@test.com'
    });
    const nuevoActivo = await Activo.create ({
        numSerie: 123456,
        numInventario: 789012,
        descripcion: 'Laptop Dell XPS 15',
        imagen: Buffer.from('contenido de la imagen')
    });
    await nuevoActivo.setResponsable(persona);
    console.log('Activo creado: ', nuevoActivo);
    models.sequelize.close();

    
}

insertar();
