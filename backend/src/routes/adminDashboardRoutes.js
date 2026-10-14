const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { getDashboardStats } = require('../controllers/dashboardController');

const router = express.Router();

router.get('/', authMiddleware, roleMiddleware('admin'), getDashboardStats);

module.exports = router;
