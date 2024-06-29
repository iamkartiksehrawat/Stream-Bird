import mongoose, { Document, Model } from "mongoose";

export type User = {
  username: string;
  imageUrl?: string;
  exUserid: string;
  bio?: string;
};

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    imageUrl: { type: String },
    exUserid: { type: String, unique: true },
    bio: { type: String },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;
