/* eslint-disable prettier/prettier */
'use strict';
const {DataTypes} =require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: 'Users',
        
          },
          key: 'id'
        },
        allowNull: false
      },
      user_type:{
        type: Sequelize.ENUM('Owner','Employee'),
        allowNull:false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date_of_birth: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('Profiles');
  }
};