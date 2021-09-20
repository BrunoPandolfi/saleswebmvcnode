'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesrecord', { 
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false 
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('salesrecord');
  }
};
