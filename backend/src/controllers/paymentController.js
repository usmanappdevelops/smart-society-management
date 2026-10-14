const paymentService = require('../services/paymentService');
const { Bill } = require('../models');

const createPayment = async (req, res) => {
  const { method, billId, amount } = req.body;

  if (!method || !billId || !amount) {
    return res.status(400).json({ success: false, message: 'Method, billId and amount are required' });
  }

  const bill = await Bill.findByPk(billId);
  if (!bill) {
    return res.status(404).json({ success: false, message: 'Bill not found' });
  }

  let response;
  if (method === 'jazzcash') {
    response = await paymentService.createJazzCashPayment({ amount, billId });
  } else if (method === 'easypaisa') {
    response = await paymentService.createEasyPaisaPayment({ amount, billId });
  } else {
    return res.status(400).json({ success: false, message: 'Unsupported payment method' });
  }

  return res.json({ success: true, data: response });
};

const paymentMethods = async (req, res) => {
  return res.json({
    success: true,
    data: [
      { method: 'jazzcash', name: 'JazzCash', status: 'available' },
      { method: 'easypaisa', name: 'Easypaisa', status: 'available' }
    ]
  });
};

module.exports = {
  createPayment,
  paymentMethods
};
