'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
      {
        email:'mo@mo.mo',
        password:'1',
        name:'Momo',
        createdAt: "2019-10-10 08:31",
        updatedAt: "2019-10-10 08:31"
      },
      {
        email:'om@mo.mo',
        password:'1',
        name:'Omo',
        createdAt: "2019-10-10 08:31",
        updatedAt: "2019-10-10 08:31"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
