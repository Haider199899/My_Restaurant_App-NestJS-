/* eslint-disable prettier/prettier */
'use strict';
const {DataTypes} =require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
      },
    
      order_items: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
      },
      total_price: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
    
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
    

    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};