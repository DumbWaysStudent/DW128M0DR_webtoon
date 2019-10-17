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
            "isFavorite": true,
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
          
          {
            "title": "Maaaa..bar",
            "genre": "romance",
            "isFavorite": true,
            "image": "https://media.gettyimages.com/photos/sagittarius-picture-id518936408?k=6&m=518936408&s=612x612&w=0&h=M7cx-q-vPu7WOwXuvekOLijb_KhgiN2k3a7i599s0Mc=",
            "createdAt": "2019-10-10 08:31",
            "updatedAt": "2019-10-10T08:31",
            "createBy": 2
          },
          {
            "title": "Cawet",
            "genre": "drama",
            "isFavorite": false,
            "image": "https://media.gettyimages.com/photos/virgo-picture-id518936426?k=6&m=518936426&s=612x612&w=0&h=p3wttB0CabqhVT_gL8EYVnZl_oIDMeDzpkDB8HUbZ-s=",
            "createdAt": "2019-10-10 08:31",
            "updatedAt": "2019-10-10T08:31",
            "createBy": 2
          },
          {
            "title": "Yolo",
            "genre": "comedy",
            "isFavorite": true,
            "image": "https://media.gettyimages.com/photos/pisces-picture-id518936432?k=6&m=518936432&s=612x612&w=0&h=1zyhFGDn_jKk_OcMjjJKdhdXoml4oGU1sUIiTKA9KUM=",
            "createdAt": "2019-10-10 08:31",
            "updatedAt": "2019-10-10T08:31",
            "createBy": 2
          },
          {
            "title": "Dan Cuk",
            "genre": "comedy",
            "isFavorite": true,
            "image": "https://media.gettyimages.com/photos/billy-girl-picture-id522217186?k=6&m=522217186&s=612x612&w=0&h=59Z5yvSiZZZ2vtcqF3Qtuy9fW0kB-i24i3Diem5BU6s=",
            "createdAt": "2019-10-10 08:31",
            "updatedAt": "2019-10-10T08:31",
            "createBy": 2
          },
          {
            "title": "Jempol Sikil",
            "genre": "romance",
            "isFavorite": true,
            "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
            "createdAt": "2019-10-10 08:31",
            "updatedAt": "2019-10-10T08:31",
            "createBy": 2
          },
          
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
