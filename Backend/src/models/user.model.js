import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: [true, "Please enter your username"],
    minlength: 3,
  },
  fullName: {
    type: String,
    required: [true, "Please enter your name"],
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
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  avatar: {
    type: String,
    default: 'default-avatar.jpg'
  },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  refreshTokens: {
    type: String,
  }

}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  )
}
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  )
}

export const User = mongoose.model('User', userSchema);