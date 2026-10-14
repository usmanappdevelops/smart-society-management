const { User } = require('../models');

const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.count();
    const approvedUsers = await User.count({ where: { isApproved: true } });
    const residentUsers = await User.count({ where: { role: 'resident' } });
    const adminUsers = await User.count({ where: { role: 'admin' } });
    const guardUsers = await User.count({ where: { role: 'guard' } });

    return res.json({
      success: true,
      data: {
        totalUsers,
        approvedUsers,
        residentUsers,
        adminUsers,
        guardUsers
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Stats unavailable' });
  }
};

module.exports = { getDashboardStats };
