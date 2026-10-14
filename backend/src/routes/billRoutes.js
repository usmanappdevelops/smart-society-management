const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { getBills, createBill } = require('../controllers/billController');

const router = express.Router();

router.get('/', authMiddleware, getBills);
router.post('/', authMiddleware, roleMiddleware('admin'), createBill);

module.exports = router;
