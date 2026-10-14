const QRCode = require('qrcode');

const createVisitorQRCode = async (passCode) => {
  try {
    const qrDataUrl = await QRCode.toDataURL(passCode);
    return qrDataUrl;
  } catch (error) {
    throw new Error('Failed to create QR code');
  }
};

module.exports = { createVisitorQRCode };
