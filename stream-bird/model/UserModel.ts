import mongoose, { Document, Model, Types, Schema } from "mongoose";

export type User = {
  username: string;
  imageUrl?: string;
  exUserid: string;
  bio?: string;
  followers: Types.ObjectId[];
  following: Types.ObjectId[];
};

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    imageUrl: { type: String },
    exUserid: { type: String, unique: true },
    bio: { type: String },
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;
