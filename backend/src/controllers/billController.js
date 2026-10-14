const { Bill, User } = require('../models');

const createBill = async (req, res) => {
  const { residentId, apartmentNumber, month, amount, dueDate } = req.body;

  if (!residentId || !apartmentNumber || !month || !amount || !dueDate) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const bill = await Bill.create({
    residentId,
    apartmentNumber,
    month,
    amount,
    dueDate,
    status: 'Unpaid'
  });

  return res.status(201).json({ success: true, data: bill });
};

const getBills = async (req, res) => {
  if (req.user.role === 'resident') {
    const bills = await Bill.findAll({
      where: { residentId: req.user.id },
      order: [['dueDate', 'DESC']]
    });
    return res.json({ success: true, data: bills });
  }

  const bills = await Bill.findAll({
    include: [{ model: User, as: 'resident', attributes: ['id', 'name', 'email', 'apartmentNumber'] }],
    order: [['dueDate', 'DESC']]
  });

  return res.json({ success: true, data: bills });
};

module.exports = {
  createBill,
  getBills
};
