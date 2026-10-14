const axios = require('axios');

const paymentService = {
  async createJazzCashPayment(payload) {
    const response = {
      provider: 'JazzCash',
      success: true,
      merchantId: process.env.JAZZCASH_MERCHANT_ID,
      transactionId: `JC-${Date.now()}`,
      status: 'Pending',
      amount: payload.amount,
      currency: 'PKR',
      redirectUrl: 'https://sandbox.jazzcash.com.pk/checkout',
      message: 'JazzCash checkout created successfully'
    };

    return response;
  },

  async createEasyPaisaPayment(payload) {
    const response = {
      provider: 'Easypaisa',
      success: true,
      merchantId: process.env.EASYPAISA_MERCHANT_ID,
      transactionId: `EP-${Date.now()}`,
      status: 'Pending',
      amount: payload.amount,
      currency: 'PKR',
      redirectUrl: 'https://sandbox.easypaisa.com.pk/checkout',
      message: 'Easypaisa checkout created successfully'
    };

    return response;
  }
};

module.exports = paymentService;
