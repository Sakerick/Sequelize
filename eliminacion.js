const models = require('./models');
const Activo = models.Activo;

async function eliminacion () {
    const activosEliminados = await Activo.destroy ({
        where: {
            numSerie: 123456
        }
    });
    console.log('Activos eliminados: ', activosEliminados)
    models.sequelize.close();

    
}

eliminacion();
