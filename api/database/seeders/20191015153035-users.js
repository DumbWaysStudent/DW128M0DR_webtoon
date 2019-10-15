'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        email:'momok',
        password:'momodachi',
        name:'Momo',
        createdAt: "2019-10-10 08:31",
        updatedAt: "2019-10-10 08:31"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
