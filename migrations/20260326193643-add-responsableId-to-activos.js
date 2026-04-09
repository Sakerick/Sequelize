// migrations/[timestamp]-add-responsableId-to-activos.js
'use strict';

module.exports = {
async up(queryInterface, Sequelize) {
// 1. Primero agregamos la columna responsableId
await queryInterface.addColumn('Activos', 'responsableId', {
type: Sequelize.INTEGER,
allowNull: true, // Puede ser null porque un activo puede no tener responsable
after: 'imagen' // Opcional: especifica después de qué columna aparece
});

// 2. Luego agregamos la llave foránea
await queryInterface.addConstraint('Activos', {
fields: ['responsableId'],
type: 'foreign key',
name: 'fk_activos_responsableId', // Nombre de la constraint
references: {
table: 'Personas',
field: 'id'
},
onDelete: 'SET NULL', // Si se elimina la persona, el responsableId se establece en NULL
onUpdate: 'CASCADE' // Si cambia el ID de la persona, se actualiza automáticamente
});

// 3. Opcional: agregar un índice para mejorar el rendimiento de las consultas
await queryInterface.addIndex('Activos', ['responsableId'], {
name: 'idx_activos_responsableId'
});
},

async down(queryInterface, Sequelize) {
// 1. Eliminar el índice
await queryInterface.removeIndex('Activos', 'idx_activos_responsableId');

// 2. Eliminar la llave foránea
await queryInterface.removeConstraint('Activos', 'fk_activos_responsableId');

// 3. Eliminar la columna responsableId
await queryInterface.removeColumn('Activos', 'responsableId');
}
};