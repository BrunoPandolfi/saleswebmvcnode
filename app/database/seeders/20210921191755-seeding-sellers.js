'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('seller', [
      {
        id: 1,
        name: 'Bob Brown',
        email: 'bob@gmail.com',
        birthDate: '1998-4-21',
        baseSalary: 1000.0,
        departmentId: 1
      }, 
      {
        id: 2,
        name: 'Maria Green',
        email: 'maria@gmail.com',
        birthDate: '1979-12-31',
        baseSalary: 3500.0,
        departmentId: 2
      },
      {
        id: 3,
        name: 'Alex Grey',
        email: 'alex@gmail.com',
        birthDate: '1988-1-15',
        baseSalary: 2200.00,
        departmentId: 1
      },
      {
        id: 4,
        name: 'Martha Red',
        email: 'martha@gmail.com',
        birthDate: '1993-11-30',
        baseSalary: 3000.00,
        departmentId: 4
      },
      {
        id: 5,
        name: 'Donald Blue',
        email: 'donald@gmail.com',
        birthDate: '2000-1-9',
        baseSalary: 4000.00,
        departmentId: 3
      },
      {
        id: 6,
        name: 'Alex Pink',
        email: 'bob@gmail.com',
        birthDate: '1997-3-4',
        baseSalary: 3000.00,
        departmentId: 2
     }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('seller', [
      {
        id: 1,
        name: 'Bob Brown',
        email: 'bob@gmail.com',
        birthDate: '1998-4-21',
        baseSalary: 1000.0,
        departmentId: 1
      }, 
      {
        id: 2,
        name: 'Maria Green',
        email: 'maria@gmail.com',
        birthDate: '1979-12-31',
        baseSalary: 3500.0,
        departmentId: 2
      },
      {
        id: 3,
        name: 'Alex Grey',
        email: 'alex@gmail.com',
        birthDate: '1988-1-15',
        baseSalary: 2200.00,
        departmentId: 1
      },
      {
        id: 4,
        name: 'Martha Red',
        email: 'martha@gmail.com',
        birthDate: '1993-11-30',
        baseSalary: 3000.00,
        departmentId: 4
      },
      {
        id: 5,
        name: 'Donald Blue',
        email: 'donald@gmail.com',
        birthDate: '2000-1-9',
        baseSalary: 4000.00,
        departmentId: 3
      },
      {
        id: 6,
        name: 'Alex Pink',
        email: 'bob@gmail.com',
        birthDate: '1997-3-4',
        baseSalary: 3000.00,
        departmentId: 2
     }
    ]);
  }
};
