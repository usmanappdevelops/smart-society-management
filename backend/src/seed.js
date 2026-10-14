const { User } = require('./models');
const bcrypt = require('bcryptjs');

const seedDatabase = async () => {
  try {
    const adminExists = await User.findOne({ where: { email: 'admin@smartsociety.com' } });
    if (!adminExists) {
      const adminPassword = await bcrypt.hash('admin123', 10);
      await User.create({
        name: 'System Admin',
        email: 'admin@smartsociety.com',
        password: adminPassword,
        phone: '03001234567',
        role: 'admin',
        isApproved: true
      });
    }

    const residentExists = await User.findOne({ where: { email: 'resident1@smartsociety.com' } });
    if (!residentExists) {
      const residentPassword = await bcrypt.hash('resident123', 10);
      await User.create({
        name: 'Ali Khan',
        email: 'resident1@smartsociety.com',
        password: residentPassword,
        phone: '03005556677',
        apartmentNumber: 'A-101',
        role: 'resident',
        isApproved: true
      });
    }

    const guardExists = await User.findOne({ where: { email: 'guard1@smartsociety.com' } });
    if (!guardExists) {
      const guardPassword = await bcrypt.hash('guard123', 10);
      await User.create({
        name: 'Malik Ahmed',
        email: 'guard1@smartsociety.com',
        password: guardPassword,
        phone: '03001112233',
        role: 'guard',
        isApproved: true
      });
    }
    console.log('Seed users ready.');
  } catch (error) {
    console.error('Seeding failed:', error);
  }
};

const syncDatabase = async () => {
  const sequelize = require('./config/database');
  await sequelize.sync({ alter: true });
};

module.exports = {
  seedDatabase,
  syncDatabase
};
