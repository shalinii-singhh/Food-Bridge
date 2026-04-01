import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Simplified geocoder for demonstration without API keys.
// Returns coordinates near Mumbai since the UI highlights "Mumbai"
const geocodeAddress = (address) => {
  // Mumbai approx: 19.0760, 72.8777 (lat, lng). Note: MongoDB GeoJSON takes [lng, lat]
  const baseLng = 72.8777;
  const baseLat = 19.0760;
  // Offset by up to ~5km randomly to spread NGOs out in the radius radar view
  const offsetLng = (Math.random() - 0.5) * 0.1;
  const offsetLat = (Math.random() - 0.5) * 0.1;
  return [baseLng + offsetLng, baseLat + offsetLat]; // [longitude, latitude]
};

// @desc    Register a new user (Donor or NGO)
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
  const { 
    name, email, password, role, 
    registrationNumber, contactPerson, phone, addressText, 
    capacity, acceptedFoodTypes 
  } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Role-specific validation
    if (role === 'ngo' && !registrationNumber) {
      return res.status(400).json({ message: 'NGO registration number is required' });
    }

    // Generate location from address
    const coordinates = addressText ? geocodeAddress(addressText) : [0,0];

    const user = await User.create({
      name,
      email,
      password,
      role: role || 'donor',
      registrationNumber,
      contactPerson,
      phone,
      addressText,
      capacity: capacity || 100,
      acceptedFoodTypes: acceptedFoodTypes || [],
      location: {
        type: 'Point',
        coordinates
      }
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        addressText: user.addressText
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
