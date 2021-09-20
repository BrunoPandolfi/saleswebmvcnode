'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkInsert('department', [{
        id: 1,
        name: "Books"
      },
      {
        id: 2,
        name: "Computers"
      },
      {
        id: 3,
        name: "Fashion"
      },
      {
        id: 4,
        name: "Electronics"
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('department', [{
      id: 1,
      name: "Books"
    },
    {
      id: 2,
      name: "Computers"
    },
    {
      id: 3,
      name: "Fashion"
    },
    {
      id: 4,
      name: "Electronics"
    },
  ]);
  }
};
