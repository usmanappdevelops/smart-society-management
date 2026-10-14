const { v4: uuidv4 } = require('uuid');
const { Visitor, User } = require('../models');
const { createVisitorQRCode } = require('../utils/qrUtils');

const createVisitorPass = async (req, res) => {
  const { visitorName, visitorPhone, vehicleNumber, purpose } = req.body;

  if (!visitorName || !visitorPhone || !purpose) {
    return res.status(400).json({ success: false, message: 'Visitor name, phone and purpose are required' });
  }

  const residentId = req.user.id;
  const passCode = `SS-${Date.now()}-${uuidv4().slice(0, 6).toUpperCase()}`;
  const qrCode = await createVisitorQRCode(passCode);

  const visitor = await Visitor.create({
    residentId,
    visitorName,
    visitorPhone,
    vehicleNumber,
    purpose,
    passCode,
    status: 'Pending'
  });

  return res.status(201).json({
    success: true,
    message: 'Visitor pass created successfully',
    data: {
      ...visitor.toJSON(),
      qrCode
    }
  });
};

const getVisitors = async (req, res) => {
  const where = req.user.role === 'resident' ? { residentId: req.user.id } : {};

  const visitors = await Visitor.findAll({
    where,
    include: [{ model: User, as: 'resident', attributes: ['id', 'name', 'apartmentNumber'] }],
    order: [['createdAt', 'DESC']]
  });

  return res.json({ success: true, data: visitors });
};

const verifyVisitor = async (req, res) => {
  const { passCode } = req.body;

  if (!passCode) {
    return res.status(400).json({ success: false, message: 'Pass code is required' });
  }

  const visitor = await Visitor.findOne({ where: { passCode } });
  if (!visitor) {
    return res.status(404).json({ success: false, message: 'Visitor pass not found' });
  }

  if (visitor.status === 'Checked-Out' || visitor.status === 'Expired') {
    return res.status(400).json({ success: false, message: 'This pass is no longer valid' });
  }

  visitor.status = visitor.status === 'Pending' ? 'Checked-In' : 'Checked-Out';
  visitor.entryTime = visitor.entryTime || new Date();
  visitor.exitTime = visitor.status === 'Checked-Out' ? new Date() : null;

  await visitor.save();

  return res.json({
    success: true,
    message: `Visitor ${visitor.status === 'Checked-In' ? 'checked in' : 'checked out'} successfully`,
    data: visitor
  });
};

module.exports = {
  createVisitorPass,
  getVisitors,
  verifyVisitor
};
