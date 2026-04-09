'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActivosTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ActivosTags.init({
    tagId: DataTypes.INTEGER,
    activoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ActivosTags',
  });
  return ActivosTags;
};