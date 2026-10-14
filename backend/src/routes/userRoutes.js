const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const { User } = require('../models');

const router = express.Router();

router.get('/', authMiddleware, roleMiddleware('admin'), async (req, res) => {
  const users = await User.findAll({
    attributes: ['id', 'name', 'email', 'phone', 'apartmentNumber', 'role', 'isApproved', 'createdAt']
  });

  return res.json({ success: true, data: users });
});

module.exports = router;
