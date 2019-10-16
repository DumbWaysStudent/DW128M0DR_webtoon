'use strict';
module.exports = (sequelize, DataTypes) => {
  const pages = sequelize.define('pages', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    episode_id: DataTypes.INTEGER
  }, {});
  pages.associate = function(models) {
    pages.belongsTo(models.episodes,{
      foreignKey:"episode_id"
    })
  };
  return pages;
};