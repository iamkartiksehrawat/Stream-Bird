import mongoose, { Types, Schema } from "mongoose";

export type Stream = {
  _id: string;
  name: string;
  thumbnailUrl?: string | null;
  ingressId: string;
  serverUrl?: string;
  streamKey: string;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
  isLive: boolean;
  userId: Types.ObjectId;
};

const streamSchema = new Schema(
  {
    name: { type: String, required: true },
    thumbnailUrl: { type: String },
    ingressId: { type: String, unique: true },
    serverUrl: { type: String },
    streamKey: { type: String },
    isChatEnabled: { type: Boolean, default: true },
    isChatDelayed: { type: Boolean, default: false },
    isChatFollowersOnly: { type: Boolean, default: false },
    isLive: { type: Boolean, default: false },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const StreamModel =
  mongoose.models.Stream || mongoose.model("Stream", streamSchema);
export default StreamModel;
