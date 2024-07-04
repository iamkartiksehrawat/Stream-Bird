import { connect } from "./dbconfig";
import mongoose from "mongoose";
import User from "../model/UserModel";
import StreamModel from "@/model/stream";

connect();

export const getUserByUsername = async (username: string) => {
  try {
    const user = await User.findOne({
      username: username,
    }).populate("stream");
    const data = JSON.parse(JSON.stringify(user));
    return data;
  } catch (e) {
    console.log(e);
    return;
  }
};

export const getUserById = async (id: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const user = await User.findById(objectId);
    if (!user) {
      return null;
    }
    const data = JSON.parse(JSON.stringify(user));
    return data;
  } catch (e) {
    console.log(e);
    return;
  }
};
