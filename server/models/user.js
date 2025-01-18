import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    firstName: String,
    lastName: String,
    password: {
      type: String,
      required: true,
    },
    age: Number,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
