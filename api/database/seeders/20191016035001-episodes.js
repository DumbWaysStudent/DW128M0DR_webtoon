'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('episodes', [
        {
          "title": "Ep. 1",
          "image": "https://webtoon-phinf.pstatic.net/20190923_34/1569202898234T8MAO_JPEG/15692028982171485500.jpg?type=q90",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":1
        },
        {
          "title": "Ep. 2",
          "image": "https://webtoon-phinf.pstatic.net/20190902_21/1567420578238mh34l_JPEG/15674205782091485481.jpg?type=q90",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":1
        },
        {
          "title": "Ep. 3",
          "image": "https://webtoon-phinf.pstatic.net/20190814_45/1565780316771waVhR_JPEG/15657803167581485440.jpg?type=q90",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":1
        },
        {
          "title": "Ep. 4",
          "image": "https://webtoon-phinf.pstatic.net/20190814_66/1565780264052K1reA_JPEG/15657802640381485431.jpg?type=q90",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":1
        },
        {
          "title": "Ep. 5",
          "image": "https://webtoon-phinf.pstatic.net/20190515_104/1557901982159JaVrP_JPEG/15579019821191485366.jpg?type=q90",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":1
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
