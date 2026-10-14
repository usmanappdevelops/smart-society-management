const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { createComplaint, getComplaints, updateComplaintStatus } = require('../controllers/complaintController');

const router = express.Router();

router.get('/', authMiddleware, getComplaints);
router.post('/', authMiddleware, roleMiddleware('resident'), createComplaint);
router.patch('/:id/status', authMiddleware, roleMiddleware('admin', 'guard'), updateComplaintStatus);

module.exports = router;
