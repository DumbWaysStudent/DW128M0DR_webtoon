'use strict';
module.exports = (sequelize, DataTypes) => {
  const episodes = sequelize.define('episodes', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    webtoon_id: DataTypes.INTEGER
  }, {});
  episodes.associate = function(models) {
   episodes.belongsTo(models.webtoons,{
     foreignKey:'webtoon_id'
   })
  };
  return episodes;
};