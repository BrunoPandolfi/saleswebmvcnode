'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('seller', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      birthDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      baseSalary: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('seller');
  }
};