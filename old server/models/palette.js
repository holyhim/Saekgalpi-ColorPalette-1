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
      colorCode01: DataTypes.STRING,
      colorCode02: DataTypes.STRING,
      colorCode03: DataTypes.STRING,
      colorCode04: DataTypes.STRING,
      colorCode05: DataTypes.STRING,
      colorCode06: DataTypes.STRING,
      colorCode07: DataTypes.STRING,
      visit: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Palette',
    }
  );
  return Palette;
};
