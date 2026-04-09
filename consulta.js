// INSTRUCCION: "BUSCAR TODAS LAS PERSONAS Y PARA CADA PERSONA MOSTRAR TODOS SUS ACTIVOS


// const models = require('./models');
// async function consulta() {  
//    const activos = await models.Activo.findAll({
//          include: [{
//             model: models.Persona,
//             as: 'responsable'
//          }]
//    });
//    activos.forEach(activo =>{
//        console.log(activo.dataValues);
//    });
//    models.sequelize.close();
// }
// //consulta();


const models = require('./models');

async function consulta() {
  try {
    const personas = await models.Persona.findAll();

    for (const persona of personas) {
      console.log(`-------------------------------------------`);
      console.log(`PERSONA: ${persona.nombre}`);

      // Sequelize hace una consulta extra aquí: SELECT * FROM activos WHERE responsableId = ...
      const susActivos = await persona.getActivos();

      if (susActivos.length > 0) {
        susActivos.forEach(activo => {
          console.log(`  -> Activo: ${activo.descripcion}`);
        });
      } else {
        console.log(`  (Sin activos)`);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    await models.sequelize.close();
  }
}

//consulta();


const models = require('./models');

async function asignarActivos() {
    try {
        const persona = await models.Persona.findByPk(1);

        const IDsParaAsignar = [3, 4, 5];
        
        await persona.setActivos(IDsParaAsignar);

        console.log(`Activos asignados correctamente a ${persona.nombre}`);
        
    } catch (error) {
        console.error("Error al asignar:", error);
    } finally {
        await models.sequelize.close();
    }
}

asignarActivos();