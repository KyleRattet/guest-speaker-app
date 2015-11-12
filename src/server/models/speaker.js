'use strict';
module.exports = function(sequelize, DataTypes) {
  var Speaker = sequelize.define('Speaker', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true
    },
    company: {
      type:DataTypes.STRING,
      allowNull: false,
      required: true
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_speaking: {
      type:DataTypes.DATE,
      allowNull: true,
      required: true
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Speaker;
};
