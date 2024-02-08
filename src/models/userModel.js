import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide a Usernanme"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a Email"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotpasswodToken: String,
  forgotpasswodTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
