import mongoose, { Types, Schema } from "mongoose";

export type User = {
  _id: string;
  username: string;
  imageUrl?: string;
  exUserid: string;
  bio?: string;
  followers: Types.ObjectId[];
  following: Types.ObjectId[];
  stream: Types.ObjectId;
};

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    imageUrl: { type: String },
    exUserid: { type: String, unique: true },
    bio: { type: String },
    followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: Schema.Types.ObjectId, ref: "User" }],
    stream: { type: Schema.Types.ObjectId, ref: "Stream" },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;
