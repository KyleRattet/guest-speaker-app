'use strict';
module.exports = {
 up: function(queryInterface, Sequelize) {
   return [queryInterface.addColumn('Speakers', 'email', {
     type:Sequelize.STRING,
     allowNull: false,
     required: true
   }),
   queryInterface.addColumn('Speakers', 'topic', {
     type:Sequelize.STRING,
     allowNull: false,
     required: true
   }),
  ]
 },
 down: function(queryInterface, Sequelize) {
       return queryInterface.removeColumn('Speakers', 'company');
 }
};

