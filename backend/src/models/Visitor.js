const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Visitor = sequelize.define('Visitor', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  residentId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  visitorName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  visitorPhone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vehicleNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  purpose: {
    type: DataTypes.STRING,
    allowNull: false
  },
  passCode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Checked-In', 'Checked-Out', 'Expired'),
    defaultValue: 'Pending'
  },
  entryTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'visitors',
  timestamps: true
});

module.exports = Visitor;
