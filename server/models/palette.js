'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Palette extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Palette.init(
    {
      userId: DataTypes.INTEGER,
      paletteName: DataTypes.STRING,
      description: DataTypes.STRING,
      colorCode: DataTypes.STRING,
      visit: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Palette',
    }
  );
  return Palette;
};
