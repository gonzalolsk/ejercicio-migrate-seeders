'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('Products', {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
        name:{
          type: Sequelize.STRING,
          allowNull: true,
          unique: true
      },
        brandId:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{  //esto es para decirle que hay una foreing key relacionada al modelo de marcas
            model: 'Brands',
            key:'id'
          }
      },
        createdAt:{
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
      },
        updatedAt:{
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        }       
      })
     // await queryInterface.addIndex('Products', 'idx_products_brandId', ['brandId']) //esto es como un refuerzo de lo de references, no explicó mucho que es
    } catch (error) {
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('Products');

    } catch (error) {
      throw error;
    }
  }
};
