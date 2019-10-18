'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('webtoons', [
          {
            "title": "Yaree",
            "genre": "romance",
            "isFavorite": true,
            "image": "https://media.gettyimages.com/photos/irish-barmaid-picture-id518931964?k=6&m=518931964&s=612x612&w=0&h=U8hRhGjW4S93Gob2TDIFMc93HV_bvd0laYk6i9sEiys=",
            "createdAt": "2019-10-10 08:31",
            "updatedAt": "2019-10-10T08:31",
            "createBy": 1
          },
          {
            "title": "Cawet",
            "genre": "drama",
            "isFavorite": false,
            "image": "https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90",
            "createdAt": "2019-10-10 08:31",
            "updatedAt": "2019-10-10T08:31",
            "createBy": 1
          },
          {
            "title": "Hemmm",
            "genre": "comedy",
            "isFavorite": true,
            "image": "https://media.gettyimages.com/photos/sexy-anime-girl-in-boots-picture-id522073214?k=6&m=522073214&s=612x612&w=0&h=KecMNK0yGiPqniGXqJH3951dOKgIxRZr1RQuFC4oAmY=",
            "createdAt": "2019-10-10 08:31",
            "updatedAt": "2019-10-10T08:31",
            "createBy": 1
          },
          {
            "title": "Dewangga Ngiler",
            "genre": "comedy",
            "isFavorite": false,
            "image": "https://media.gettyimages.com/photos/anime-cheerleader-picture-id522089032?k=6&m=522089032&s=612x612&w=0&h=lzFTNrHLVmpSEAfip4Ix9hH2jIFDo0oEqnbLExwLSlc=",
            "createdAt": "2019-10-10 08:31",
            "updatedAt": "2019-10-10T08:31",
            "createBy": 1
          },
          {
            "title": "Ini Judul",
            "genre": "romance",
            "isFavorite": true,
            "image": "https://media.gettyimages.com/photos/anime-fighter-picture-id518933214?k=6&m=518933214&s=612x612&w=0&h=EIvePfY4TPNsfWkyhFUmqFR_HTZ_C8Ym7sh1kGpfyM8=",
            "createdAt": "2019-10-10 08:31",
            "updatedAt": "2019-10-10T08:31",
            "createBy": 1
          },
          // {
          //   "title": "Jempol Sikil",
          //   "genre": "romance",
          //   "isFavorite": false,
          //   "image": "",
          //   "createdAt": "2019-10-10 08:31",
          //   "updatedAt": "2019-10-10T08:31",
          //   "createBy": 2
          // },
          
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
