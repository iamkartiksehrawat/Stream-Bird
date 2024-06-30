import { connect } from "./dbconfig";
import User from "@/model/UserModel";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
  let userid;
  let following = [];
  try {
    await connect();
    const self = await getSelf();
    userid = self.exUserid;
    following = self.following.map((user: any) => user._id);
  } catch (e) {
    userid = null;
  }

  try {
    const users = await User.find().sort({ createdAt: -1 });
    const data = JSON.parse(JSON.stringify(users));

    const recommended = data.filter(
      (user: any) => user.exUserid !== userid && !following.includes(user._id)
    );

    return recommended;
  } catch (error) {
    console.error("Error fetching recommended users:", error);
    throw error;
  }
};
