'use strict';

const brands = require('../../models/brands')

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('Brands', brands.all(), {});   
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Brands', null, {});
    
  }
};
