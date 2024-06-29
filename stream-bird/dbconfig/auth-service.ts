import { currentUser } from "@clerk/nextjs/server";
import { connect } from "./dbconfig";
import User from "@/model/UserModel";

export const getSelf = async () => {
  connect();
  const self = await currentUser();
  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const user = await User.findOne({
    exUserid: self.id,
  });

  if (!user) {
    throw new Error("Not Found");
  }

  return user;
};
