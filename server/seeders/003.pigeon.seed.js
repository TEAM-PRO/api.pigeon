'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Pigeons', [
      {
        ownerId: 1,
        price: 750.00,
        age: 2,
        numberRing: 2,
        country: 'USA',
        forSale: false,
        controllerNumber: 1235,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        ownerId: 1,
        price: 600.00,
        age: 1,
        numberRing: 3,
        country: 'Ukraine',
        forSale: true,
        controllerNumber: 1242,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        ownerId: 2,
        price: 1225.00,
        age: 3,
        numberRing: 3,
        country: 'Italy',
        forSale: false,
        controllerNumber: 1222,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Pigeons', null)
};
