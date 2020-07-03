'use strict';

//const Palette = require('./palette');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      userName: DataTypes.STRING,
      signatureColor: DataTypes.STRING,
    },
    {}
  );

  //   User.associate = function (models) {
  //     models.User.belongsTo(Palette, {
  //       as: 'palettes',
  //       foreignKey: 'userId',
  //       sourceKey: 'id',
  //     });
  //   };

  return User;
};
