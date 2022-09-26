/* eslint-disable prettier/prettier */
'use strict';
const { async } = require('rxjs');
const {DataTypes, Sequelize} =require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: 'Profiles',
        
          },
          key: 'id'
        },
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contact_num: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('Restaurants');
  }
};