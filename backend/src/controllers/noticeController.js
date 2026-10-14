const { Notice, User } = require('../models');

const createNotice = async (req, res) => {
  const { title, content, priority } = req.body;

  if (!title || !content) {
    return res.status(400).json({ success: false, message: 'Title and content are required' });
  }

  const notice = await Notice.create({
    adminId: req.user.id,
    title,
    content,
    priority: priority || 'Normal'
  });

  return res.status(201).json({ success: true, data: notice });
};

const getNotices = async (req, res) => {
  const notices = await Notice.findAll({
    include: [{ model: User, as: 'admin', attributes: ['id', 'name'] }],
    order: [['createdAt', 'DESC']]
  });

  return res.json({ success: true, data: notices });
};

module.exports = {
  createNotice,
  getNotices
};
