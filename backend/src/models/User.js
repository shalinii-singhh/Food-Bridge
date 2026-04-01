import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['donor', 'ngo'], default: 'donor' },
  // Optional for donors, required for NGOs:
  registrationNumber: { type: String }, // Validated for NGOs
  contactPerson: { type: String },
  phone: { type: String },
  addressText: { type: String },
  capacity: { type: Number },
  acceptedFoodTypes: [{ type: String }],
  
  // Geospatial Index for matching
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number] // [longitude, latitude]
    }
  }
}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare passed password
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create a 2dsphere index for geolocation queries
UserSchema.index({ location: "2dsphere" });

const User = mongoose.model('User', UserSchema);
export default User;
