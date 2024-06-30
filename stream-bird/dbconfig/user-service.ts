import { connect } from "./dbconfig";
import User from "../model/UserModel";

connect();

export const getUserByUsername = async (username: string) => {
  try {
    const user = await User.findOne({
      username: username,
    });
    const data = JSON.parse(JSON.stringify(user));
    return data;
  } catch (e) {
    console.log(e);
    return;
  }
};
