'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Pigeon', [
      {
        ownerId: 1,
        price: 750.00,
        age: 2.5,
        numberRing: 212345,
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
        numberRing: 334231,
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
        numberRing: 328990,
        country: 'Italy',
        forSale: false,
        controllerNumber: 1222,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Pigeon', null)
};
