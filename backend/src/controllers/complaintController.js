const { Complaint, User } = require('../models');

const createComplaint = async (req, res) => {
  const { category, title, description, imageUrl } = req.body;

  if (!category || !title || !description) {
    return res.status(400).json({ success: false, message: 'Category, title and description are required' });
  }

  const complaint = await Complaint.create({
    residentId: req.user.id,
    category,
    title,
    description,
    imageUrl,
    status: 'Pending'
  });

  return res.status(201).json({ success: true, data: complaint });
};

const getComplaints = async (req, res) => {
  const where = req.user.role === 'resident' ? { residentId: req.user.id } : {};

  const complaints = await Complaint.findAll({
    where,
    include: [{ model: User, as: 'resident', attributes: ['id', 'name', 'apartmentNumber'] }],
    order: [['createdAt', 'DESC']]
  });

  return res.json({ success: true, data: complaints });
};

const updateComplaintStatus = async (req, res) => {
  const { status, assignedTo } = req.body;
  const complaint = await Complaint.findByPk(req.params.id);

  if (!complaint) {
    return res.status(404).json({ success: false, message: 'Complaint not found' });
  }

  complaint.status = status || complaint.status;
  complaint.assignedTo = assignedTo || complaint.assignedTo;
  await complaint.save();

  return res.json({ success: true, data: complaint });
};

module.exports = {
  createComplaint,
  getComplaints,
  updateComplaintStatus
};
