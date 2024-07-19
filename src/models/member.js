const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Member = sequelize.define('Member', {
  fullName: { type: DataTypes.STRING, allowNull: false },
  placeOfBirth: { type: DataTypes.STRING, allowNull: false },
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: {
        msg: 'Date of birth must be a valid date',
      },
    },
  },
  phoneNumber: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } },
  address: { type: DataTypes.TEXT, allowNull: false },
  province: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  gender: { type: DataTypes.STRING, allowNull: false },
  occupation: { type: DataTypes.STRING, allowNull: false },
  maritalStatus: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Member;
