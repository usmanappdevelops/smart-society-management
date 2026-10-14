const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { createNotice, getNotices } = require('../controllers/noticeController');

const router = express.Router();

router.get('/', authMiddleware, getNotices);
router.post('/', authMiddleware, roleMiddleware('admin'), createNotice);

module.exports = router;
