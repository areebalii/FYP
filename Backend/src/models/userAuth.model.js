import mongoose from 'mongoose';

const userAuthSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 3,

  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
}, { timestamps: true });

export default mongoose.model('UserAuth', userAuthSchema);