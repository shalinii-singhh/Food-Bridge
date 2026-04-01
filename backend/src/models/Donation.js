import mongoose from 'mongoose';

const DonationSchema = new mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  foodType: {
    type: String, // e.g., 'Cooked Meals', 'Raw Veggies', 'Packaged'
    required: true
  },
  quantity: {
    type: String, // e.g., '50 Meals', '45 kg'
    required: true
  },
  cookedTime: {
    type: Date,
  },
  expiryTime: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'matched', 'en_route', 'delivered'],
    default: 'pending'
  },
  matchedNGO: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  locationText: {
    type: String,
    required: true
  },
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

DonationSchema.index({ location: "2dsphere" });

const Donation = mongoose.model('Donation', DonationSchema);
export default Donation;
