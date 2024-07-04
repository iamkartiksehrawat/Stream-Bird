"use server";

import { v4 } from "uuid";
import { AccessToken } from "livekit-server-sdk";
import { getSelf } from "@/dbconfig/auth-service";
import { getUserById } from "@/dbconfig/user-service";

export const createViewerToken = async (hostIdentity: string) => {
  let self;

  try {
    self = await getSelf();
  } catch {
    const _id = v4();
    const username = `guest#${Math.floor(Math.random() * 1000)}`;
    self = { _id, username };
  }

  const host = await getUserById(hostIdentity);

  if (!host) {
    throw new Error("Host not found");
  }

  const isHost = self._id === host._id;

  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY,
    process.env.LIVEKIT_API_SECRET,
    {
      identity: isHost ? `host-${self._id}` : self._id,
      name: self.username,
    }
  );

  token.addGrant({
    room: host._id,
    roomJoin: true,
    canPublish: false,
    canPublishData: true,
  });

  return await Promise.resolve(token.toJwt());
};
