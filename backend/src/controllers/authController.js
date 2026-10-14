const bcrypt = require('bcryptjs');
const { User } = require('../models');
const generateToken = require('../utils/generateToken');

const registerUser = async (req, res) => {
  const { name, email, password, phone, apartmentNumber, role } = req.body;

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ success: false, message: 'All required fields are required' });
  }

  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res.status(400).json({ success: false, message: 'User already exists with this email' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    phone,
    apartmentNumber,
    role: role || 'resident',
    isApproved: role === 'admin' || role === 'guard'
  });

  const token = generateToken(user);

  return res.status(201).json({
    success: true,
    message: 'User registered successfully',
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      apartmentNumber: user.apartmentNumber,
      isApproved: user.isApproved
    }
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid email or password' });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ success: false, message: 'Invalid email or password' });
  }

  if (user.role !== 'admin' && !user.isApproved) {
    return res.status(403).json({ success: false, message: 'Your account is pending admin approval' });
  }

  const token = generateToken(user);

  return res.json({
    success: true,
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      apartmentNumber: user.apartmentNumber,
      isApproved: user.isApproved
    }
  });
};

const getCurrentUser = async (req, res) => {
  return res.json({ success: true, user: req.user });
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser
};
