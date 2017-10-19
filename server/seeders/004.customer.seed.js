'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Customers', [
      {
        userId: 1,
        pigeonId: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        userId: 2,
        pigeonId: 1,
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        userId: 2,
        pigeonId: 2,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Customers', null)
};
