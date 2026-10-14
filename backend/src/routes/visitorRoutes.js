const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { getCurrentUser } = require('../controllers/authController');
const { getVisitors, createVisitorPass, verifyVisitor } = require('../controllers/visitorController');

const router = express.Router();

router.get('/', authMiddleware, roleMiddleware('resident', 'admin', 'guard'), getVisitors);
router.post('/', authMiddleware, roleMiddleware('resident'), createVisitorPass);
router.post('/verify', authMiddleware, roleMiddleware('guard', 'admin'), verifyVisitor);

module.exports = router;
