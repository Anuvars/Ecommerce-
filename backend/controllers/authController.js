const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Signup - save client
exports.signup = async (req, res) => {
  const { name, email, phone, location, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, phone, location, password: hashedPassword });
    await user.save();

    res.status(200).json({ message: 'Signup successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Login - validate client/admin
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Admin login
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    return res.status(200).json({ message: 'Admin login successful', role: 'admin' });
  }

  // Client login
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    res.status(200).json({ message: 'Client login successful', role: 'client' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
