const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { createPayment, paymentMethods } = require('../controllers/paymentController');

const router = express.Router();

router.get('/methods', authMiddleware, paymentMethods);
router.post('/create', authMiddleware, roleMiddleware('resident'), createPayment);

module.exports = router;
