'use strict';

//const User = require('./user');

module.exports = (sequelize, DataTypes) => {
  const Palette = sequelize.define(
    'Palette',
    {
      userId: DataTypes.INTEGER,
      paletteName: DataTypes.STRING,
      description: DataTypes.STRING,
      colorCode: DataTypes.STRING,
      visit: DataTypes.INTEGER,
    },
    {}
  );

  //   Palette.associate = function (models) {
  //     models.Palette.hasMany(User, { foreignKey: 'userId', targetKey: 'id' });
  //   };

  return Palette;
};
