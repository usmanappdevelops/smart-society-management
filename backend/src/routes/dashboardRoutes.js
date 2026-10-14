const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { User } = require('../models');

const router = express.Router();

router.get('/dashboard', authMiddleware, roleMiddleware('admin'), async (req, res) => {
  try {
    const totalUsers = await User.count();
    const approvedUsers = await User.count({ where: { isApproved: true } });
    const residentUsers = await User.count({ where: { role: 'resident' } });
    const guardUsers = await User.count({ where: { role: 'guard' } });

    return res.json({
      success: true,
      data: {
        totalUsers,
        approvedUsers,
        residentUsers,
        guardUsers
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Dashboard data error' });
  }
});

module.exports = router;
