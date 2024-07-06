import { getSelf } from "./auth-service";
import User from "../model/UserModel";
import { Types } from "mongoose";
import { connect } from "./dbconfig";
import { currentUser } from "@clerk/nextjs/server";

export const getFollowedUsers = async () => {
  try {
    await connect();
    const self = await currentUser();
    if (!self || !self.username) {
      throw new Error("Unauthorized");
    }

    const user = await User.findOne({
      exUserid: self.id,
    })
      .populate("following")
      .populate({
        path: "following",
        populate: {
          path: "stream",
        },
      });

    const data = JSON.parse(JSON.stringify(user));

    if (!data) {
      throw new Error("Not Found");
    }

    return data.following;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const isFollowingUser = async (id: string): Promise<boolean> => {
  try {
    await connect();
    const self = await getSelf();

    if (!self) {
      throw new Error("User not authenticated");
    }

    const otherUser = await User.findOne({
      _id: new Types.ObjectId(id),
    });

    if (!otherUser) {
      throw new Error("User not found");
    }

    if (self._id === id) {
      return true;
    }

    const existingFollow = await User.findOne({
      _id: self._id,
      following: otherUser._id,
    });

    return !!existingFollow;
  } catch (error) {
    console.error("Error checking following status:", error);
    return false;
  }
};

export const followUser = async (id: string) => {
  try {
    await connect();
    const self = await getSelf();

    const otherUser = await User.findOne({
      _id: new Types.ObjectId(id),
    });

    if (!otherUser) {
      throw new Error("User not found");
    }

    if (id === self._id) {
      throw new Error("You can't follow yourself");
    }

    const existingFollow = await User.findOne({
      _id: self._id,
      following: otherUser._id,
    });

    if (existingFollow) {
      throw new Error("Already Following");
    }

    await User.updateOne(
      { _id: self._id },
      { $addToSet: { following: otherUser._id } }
    );

    await User.updateOne(
      { _id: otherUser._id },
      { $addToSet: { followers: self._id } }
    );

    const following = JSON.parse(JSON.stringify(otherUser));
    const follower = JSON.parse(JSON.stringify(self));

    return {
      following,
      follower,
    };
  } catch (e) {
    console.log(e);
    throw new Error("Internal Error");
  }
};

export const unfollowUser = async (id: string) => {
  try {
    await connect();
    const self = await getSelf();

    const otherUser = await User.findOne({
      _id: new Types.ObjectId(id),
    });

    if (!otherUser) {
      throw new Error("User not found");
    }

    if (id === self._id) {
      throw new Error("Can't follow yourself");
    }

    const existingFollow = await User.findOne({
      _id: self._id,
      following: otherUser._id,
    });

    if (!existingFollow) {
      throw new Error("Not Following");
    }

    await User.updateOne(
      { _id: self._id },
      { $pull: { following: otherUser._id } }
    );

    await User.updateOne(
      { _id: otherUser._id },
      { $pull: { followers: self._id } }
    );

    const unfollowed = JSON.parse(JSON.stringify(otherUser));
    const unfollower = JSON.parse(JSON.stringify(self));

    return {
      unfollowed,
      unfollower,
    };
  } catch (e) {
    console.log(e);
    throw new Error("Internal Error");
  }
};
