import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
    },
    exUserid: {
      type: String,
      unique: true,
    },
    bio: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("users", userSchema);
export default User;
