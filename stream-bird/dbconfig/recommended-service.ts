import { resolve } from "path";
import { connect } from "./dbconfig";
import User from "@/model/UserModel";

export const getRecommended = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  try {
    connect();
    const users = await User.find()
      .sort({ createdAt: -1 })
      .select("-_id username imageUrl exUserid bio")
      .lean();
    return users;
  } catch (error) {
    console.error("Error fetching recommended users:", error);
    throw error;
  }
};
