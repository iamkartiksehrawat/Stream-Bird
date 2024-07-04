"use server";

import { getSelf } from "@/dbconfig/auth-service";
import StreamModel from "@/model/stream";
import { Stream } from "@/model/stream";
import { revalidatePath } from "next/cache";

const updateStream = async (values: Partial<Stream>) => {
  try {
    const self = await getSelf();

    const streamid = self.stream;

    const validData = {
      thumbnailUrl: values.thumbnailUrl,
      name: values.name,
      isChatEnabled: values.isChatEnabled,
      isChatDelayed: values.isChatDelayed,
      isChatFollowersOnly: values.isChatFollowersOnly,
    };

    const res = await StreamModel.findByIdAndUpdate(streamid, validData, {
      new: true,
    });

    console.log(res);

    revalidatePath(`/dashboard/${self.username}/chat`);
    revalidatePath(`/dashboard/${self.username}`);
    revalidatePath(`/${self.username}`);

    const data = JSON.parse(JSON.stringify(res));

    return data;
  } catch {
    throw new Error("Internal Server Error");
  }
};

export default updateStream;
