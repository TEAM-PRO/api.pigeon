'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        pigeonId: 1,
        date:  Date.parse('2017-10-01 15:00:00.00+03'),
        body: 'I\'m sell pigeon "Charly"',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        userId: 1,
        pigeonId: 2,
        date:  Date.parse('2017-10-01 16:00:00.00+03'),
        body: 'When will be the next exhibition?',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        userId: 2,
        pigeonId: 1,
        date:  Date.parse('2017-10-01 17:30:00.00+03'),
        body: 'I want to buy pigeon "Charly"',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        userId: 2,
        pigeonId: 1,
        date:  Date.parse('2017-10-02 15:00:00.00+03'),
        body: 'How much money does pigeon "Charly" cost?',
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Comments', null)
};
