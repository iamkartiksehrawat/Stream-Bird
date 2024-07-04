import StreamModel from "@/model/stream";
export const getStreamByUserId = async (userId: string) => {
  const stream = await StreamModel.findOne({
    userId: userId,
  });

  return stream;
};
