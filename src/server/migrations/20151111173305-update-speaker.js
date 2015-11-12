'use strict';
module.exports = {
 up: function(queryInterface, Sequelize) {
   return queryInterface.addColumn('Speakers', 'company', {
     type:Sequelize.STRING,
     allowNull: false,
     required: true
   });
 },
 down: function(queryInterface, Sequelize) {
       return queryInterface.removeColumn('Speakers', 'company');
 }
};
