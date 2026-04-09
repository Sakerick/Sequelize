const models = require('./models');
const Activo = models.Activo;

async function update () {
    const activosEliminados = await Activo.update (
        { descripcion: 'Descripcion actualizada' },
        {
          where: {
            numSerie: 123456,
      },
    },
);
    console.log('Activos actualizados: ', activosEliminados)
    models.sequelize.close();

    
}

update();
