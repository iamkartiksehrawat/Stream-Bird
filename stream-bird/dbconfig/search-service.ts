import { getSelf } from "./auth-service";
import StreamModel from "@/model/stream";

export const getSearch = async (term = "") => {
  let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  let streams = [];

  try {
    const res = await StreamModel.find({
      $or: [
        { name: { $regex: term, $options: "i" } },
        { "user.username": { $regex: term, $options: "i" } },
      ],
    })
      .select("userId _id name isLive thumbnailUrl updatedAt")
      .populate("userId")
      .sort({ isLive: -1, updatedAt: -1 });
    const data = JSON.parse(JSON.stringify(res));
    streams = data.filter((stream: any) => stream.userId._id !== userId);
    return streams;
  } catch (error) {
    console.error("Error fetching streams: ", error);
    return;
  }
};
