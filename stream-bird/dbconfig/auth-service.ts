import { currentUser } from "@clerk/nextjs/server";
import { connect } from "./dbconfig";
import User from "@/model/UserModel";

export const getSelf = async () => {
  try {
    await connect();
    const self = await currentUser();
    if (!self || !self.username) {
      throw new Error("Unauthorized");
    }

    const user = await User.findOne({
      exUserid: self.id,
    }).populate("following");

    const data = JSON.parse(JSON.stringify(user));

    if (!data) {
      throw new Error("Not Found");
    }

    return data;
  } catch (e) {
    console.log(e);
    throw new Error("Internal error");
  }
};

export const getSelfByUsername = async (username: string) => {
  try {
    await connect();

    const self = await currentUser();

    if (!self || !self.username) {
      throw new Error("Unauthorized");
    }

    const user = await User.findOne({
      username: username,
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (self.username !== user.username) {
      throw new Error("Unauthorized");
    }

    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Internal Error");
  }
};
