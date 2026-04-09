'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {[
      Activo.belongsTo(models.Persona, {
        foreignKey: 'responsableId',
        as: 'responsable',
      }),
      Activo.belongsToMany(models.Tag, {
        through: 'ActivosTags',
        foreignKey: 'activoId',
        as: 'tags'
      }),
    ]}
  }
  Activo.init({
    numSerie: DataTypes.INTEGER,
    numInventario: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Activo',
  });
  return Activo;
};