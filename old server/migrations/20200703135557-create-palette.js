'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Palettes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      paletteName: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      colorCode01: {
        type: Sequelize.STRING,
      },
      colorCode02: {
        type: Sequelize.STRING,
      },
      colorCode03: {
        type: Sequelize.STRING,
      },
      colorCode04: {
        type: Sequelize.STRING,
      },
      colorCode05: {
        type: Sequelize.STRING,
      },
      colorCode06: {
        type: Sequelize.STRING,
      },
      colorCode07: {
        type: Sequelize.STRING,
      },
      visit: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Palettes');
  },
};
