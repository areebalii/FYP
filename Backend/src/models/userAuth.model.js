import mongoose from 'mongoose';

const userAuthSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your name"],
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 3,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please enter your email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: 8,
  },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],

}, { timestamps: true });

export default mongoose.model('UserAuth', userAuthSchema);