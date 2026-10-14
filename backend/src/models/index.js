const User = require('./User');
const Visitor = require('./Visitor');
const Bill = require('./Bill');
const Complaint = require('./Complaint');
const Notice = require('./Notice');

User.hasMany(Visitor, { foreignKey: 'residentId', as: 'visitors' });
Visitor.belongsTo(User, { foreignKey: 'residentId', as: 'resident' });

User.hasMany(Bill, { foreignKey: 'residentId', as: 'bills' });
Bill.belongsTo(User, { foreignKey: 'residentId', as: 'resident' });

User.hasMany(Complaint, { foreignKey: 'residentId', as: 'complaints' });
Complaint.belongsTo(User, { foreignKey: 'residentId', as: 'resident' });

User.hasMany(Notice, { foreignKey: 'adminId', as: 'notices' });
Notice.belongsTo(User, { foreignKey: 'adminId', as: 'admin' });

module.exports = {
  User,
  Visitor,
  Bill,
  Complaint,
  Notice
};
