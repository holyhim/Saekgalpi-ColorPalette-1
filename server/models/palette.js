'use strict';

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

    User.belongsTo(Palette, { foreignKey: 'userId', targetKey: 'id' });

    return Palette;
};
