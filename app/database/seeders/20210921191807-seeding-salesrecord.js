'use strict';
const SaleStatus = require('../../models/enums/SaleStatus');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('salesrecord', [
    {
      id: 1,
      date: "2021-09-25",
      amount: 11000.0,
      status: SaleStatus.BILLED,
      sellerId: 1
    },
    {
      id: 2,
      date: "2021-09-4",
      amount: 7000.0,
      status: SaleStatus.BILLED,
      sellerId: 5
    },
    {
      id: 3,
      date: "2021-09-13",
      amount: 11000.0,
      status: SaleStatus.CANCELED,
      sellerId: 4
    },
    {
      id: 4,
      date: "2021-09-1",
      amount: 8000.0,
      status: SaleStatus.BILLED,
      sellerId: 1
    },
    {
      id: 5,
      date: "2021-09-21",
      amount: 3000.0,
      status: SaleStatus.BILLED,
      sellerId: 3
    },
    {
      id: 6,
      date: "2021-09-15",
      amount: 2000.0,
      status: SaleStatus.BILLED,
      sellerId: 1
    },
    {
      id: 7,
      date: "2021-09-28",
      amount: 13000.0,
      status: SaleStatus.BILLED,
      sellerId: 2
    },
    {
      id: 8,
      date: "2021-09-11",
      amount: 4000.0,
      status: SaleStatus.BILLED,
      sellerId: 4
    },
    {
      id: 9,
      date: "2021-09-14",
      amount: 11000.0,
      status: SaleStatus.PENDING,
      sellerId: 6
    },
    {
      id: 10,
      date: "2021-09-7",
      amount: 9000.0,
      status: SaleStatus.BILLED,
      sellerId: 6
    },
    {
      id: 11,
      date: "2021-09-13",
      amount: 6000.0,
      status: SaleStatus.BILLED,
      sellerId: 2
    },
    {
      id: 12,
      date: "2021-09-25",
      amount: 7000.0,
      status: SaleStatus.PENDING,
      sellerId: 3
    },
    {
      id: 13,
      date: "2021-09-29",
      amount: 10000.0,
      status: SaleStatus.BILLED,
      sellerId: 4
    },
    {
      id: 14,
      date: "2021-09-4",
      amount: 3000.0,
      status: SaleStatus.BILLED,
      sellerId: 5
    },
    {
      id: 15,
      date: "2021-09-12",
      amount: 4000.0,
      status: SaleStatus.BILLED,
      sellerId: 1
    },
    {
      id: 16,
      date: "2021-10-5",
      amount: 2000.0,
      status: SaleStatus.BILLED,
      sellerId: 4
    },
    {
      id: 17,
      date: "2021-10-1",
      amount: 12000.0,
      status: SaleStatus.BILLED,
      sellerId: 1
    },
    {
      id: 18,
      date: "2021-10-24",
      amount: 6000.0,
      status: SaleStatus.BILLED,
      sellerId: 3
    },
    {
      id: 19,
      date: "2021-10-22",
      amount: 8000.0,
      status: SaleStatus.BILLED,
      sellerId: 5
    },
    {
      id: 20,
      date: "2021-10-15",
      amount: 8000.0,
      status: SaleStatus.BILLED,
      sellerId: 6
    },
    {
      id: 21,
      date: "2021-10-17",
      amount: 9000.0,
      status: SaleStatus.BILLED,
      sellerId: 2
    },
    {
      id: 22,
      date: "2021-10-24",
      amount: 4000.0,
      status: SaleStatus.BILLED,
      sellerId: 4
    },
    {
      id: 23,
      date: "2021-10-19",
      amount: 11000.0,
      status: SaleStatus.CANCELED,
      sellerId: 2
    },
    {
      id: 24,
      date: "2021-10-12",
      amount: 8000.0,
      status: SaleStatus.BILLED,
      sellerId: 5
    },
    {
      id: 25,
      date: "2021-10-31",
      amount: 7000.0,
      status: SaleStatus.BILLED,
      sellerId: 3
    },
    {
      id: 26,
      date: "2021-10-6",
      amount: 5000.0,
      status: SaleStatus.BILLED,
      sellerId: 4
    },
    {
      id: 27,
      date: "2021-10-13",
      amount: 9000.0,
      status: SaleStatus.PENDING,
      sellerId: 1
    },
    {
      id: 28,
      date: "2021-10-7",
      amount: 4000.0,
      status: SaleStatus.BILLED,
      sellerId: 3
    },
    {
      id: 29,
      date: "2021-10-23",
      amount: 12000.0,
      status: SaleStatus.BILLED,
      sellerId: 5
    },
    {
      id: 30,
      date: "2021-10-12",
      amount: 5000.0,
      status: SaleStatus.BILLED,
      sellerId: 2
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('salesrecord', [
      {
        id: 1,
        date: "2021-09-25",
        amount: 11000.0,
        status: SaleStatus.BILLED,
        sellerId: 1
      },
      {
        id: 2,
        date: "2021-09-4",
        amount: 7000.0,
        status: SaleStatus.BILLED,
        sellerId: 5
      },
      {
        id: 3,
        date: "2021-09-13",
        amount: 11000.0,
        status: SaleStatus.CANCELED,
        sellerId: 4
      },
      {
        id: 4,
        date: "2021-09-1",
        amount: 8000.0,
        status: SaleStatus.BILLED,
        sellerId: 1
      },
      {
        id: 5,
        date: "2021-09-21",
        amount: 3000.0,
        status: SaleStatus.BILLED,
        sellerId: 3
      },
      {
        id: 6,
        date: "2021-09-15",
        amount: 2000.0,
        status: SaleStatus.BILLED,
        sellerId: 1
      },
      {
        id: 7,
        date: "2021-09-28",
        amount: 13000.0,
        status: SaleStatus.BILLED,
        sellerId: 2
      },
      {
        id: 8,
        date: "2021-09-11",
        amount: 4000.0,
        status: SaleStatus.BILLED,
        sellerId: 4
      },
      {
        id: 9,
        date: "2021-09-14",
        amount: 11000.0,
        status: SaleStatus.PENDING,
        sellerId: 6
      },
      {
        id: 10,
        date: "2021-09-7",
        amount: 9000.0,
        status: SaleStatus.BILLED,
        sellerId: 6
      },
      {
        id: 11,
        date: "2021-09-13",
        amount: 6000.0,
        status: SaleStatus.BILLED,
        sellerId: 2
      },
      {
        id: 12,
        date: "2021-09-25",
        amount: 7000.0,
        status: SaleStatus.PENDING,
        sellerId: 3
      },
      {
        id: 13,
        date: "2021-09-29",
        amount: 10000.0,
        status: SaleStatus.BILLED,
        sellerId: 4
      },
      {
        id: 14,
        date: "2021-09-4",
        amount: 3000.0,
        status: SaleStatus.BILLED,
        sellerId: 5
      },
      {
        id: 15,
        date: "2021-09-12",
        amount: 4000.0,
        status: SaleStatus.BILLED,
        sellerId: 1
      },
      {
        id: 16,
        date: "2021-10-5",
        amount: 2000.0,
        status: SaleStatus.BILLED,
        sellerId: 4
      },
      {
        id: 17,
        date: "2021-10-1",
        amount: 12000.0,
        status: SaleStatus.BILLED,
        sellerId: 1
      },
      {
        id: 18,
        date: "2021-10-24",
        amount: 6000.0,
        status: SaleStatus.BILLED,
        sellerId: 3
      },
      {
        id: 19,
        date: "2021-10-22",
        amount: 8000.0,
        status: SaleStatus.BILLED,
        sellerId: 5
      },
      {
        id: 20,
        date: "2021-10-15",
        amount: 8000.0,
        status: SaleStatus.BILLED,
        sellerId: 6
      },
      {
        id: 21,
        date: "2021-10-17",
        amount: 9000.0,
        status: SaleStatus.BILLED,
        sellerId: 2
      },
      {
        id: 22,
        date: "2021-10-24",
        amount: 4000.0,
        status: SaleStatus.BILLED,
        sellerId: 4
      },
      {
        id: 23,
        date: "2021-10-19",
        amount: 11000.0,
        status: SaleStatus.CANCELED,
        sellerId: 2
      },
      {
        id: 24,
        date: "2021-10-12",
        amount: 8000.0,
        status: SaleStatus.BILLED,
        sellerId: 5
      },
      {
        id: 25,
        date: "2021-10-31",
        amount: 7000.0,
        status: SaleStatus.BILLED,
        sellerId: 3
      },
      {
        id: 26,
        date: "2021-10-6",
        amount: 5000.0,
        status: SaleStatus.BILLED,
        sellerId: 4
      },
      {
        id: 27,
        date: "2021-10-13",
        amount: 9000.0,
        status: SaleStatus.PENDING,
        sellerId: 1
      },
      {
        id: 28,
        date: "2021-10-7",
        amount: 4000.0,
        status: SaleStatus.BILLED,
        sellerId: 3
      },
      {
        id: 29,
        date: "2021-10-23",
        amount: 12000.0,
        status: SaleStatus.BILLED,
        sellerId: 5
      },
      {
        id: 30,
        date: "2021-10-12",
        amount: 5000.0,
        status: SaleStatus.BILLED,
        sellerId: 2
      },
  
    ]);
  }
};
