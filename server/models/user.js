'use strict';

const Palette = require('./palette');

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

    User.hasMany(Palette, { foreignKey: 'userId', sourceKey: 'id' });

    return User;
};
