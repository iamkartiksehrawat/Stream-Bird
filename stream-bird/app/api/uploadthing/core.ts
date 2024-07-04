import { createUploadthing, type FileRouter } from "uploadthing/next";

import StreamModel from "@/model/stream";
import { getSelf } from "@/dbconfig/auth-service";

const f = createUploadthing();

export const ourFileRouter = {
  thumbnailUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const self = await getSelf();

      return { user: self };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await StreamModel.findOneAndUpdate(
        { userId: metadata.user._id },
        { thumbnailUrl: file.url },
        { new: true }
      );

      return { fileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
