'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.createTable('categoriesProducts', {
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        productId:{
          type: Sequelize.INTEGER,
          references:{
            model: 'products',
            key:'id'
          }
        },
          categoryId:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{  //esto es para decirle que hay una foreing key relacionada al modelo de marcas
            model: 'categories',
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
      //await queryInterface.addIndex('categoriesProducts', 'categoriesProducts_productId_categoryId', ['productId', 'categoryId'])
      
    } catch (error) {
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('Categories');

    } catch (error) {
      throw error;
    }
  }
};
