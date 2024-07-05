import { getSelf } from "./auth-service";
import StreamModel from "@/model/stream";

export const getStreams = async () => {
  let userId;

  try {
    const self = await getSelf();
    userId = self._id;
  } catch {
    userId = null;
  }

  let streams = [];
  try {
    const res = await StreamModel.find()
      .select("_id userId isLive name thumbnailUrl")
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
