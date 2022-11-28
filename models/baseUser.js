const { DataTypes } = require('sequelize');
const sequelize = require('../scripts/helpers/sequelize.helper');

const BaseUserModel = sequelize.define(
  'BaseUserModel',
  {
    _id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accountType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
  },
);

module.exports = BaseUserModel;
