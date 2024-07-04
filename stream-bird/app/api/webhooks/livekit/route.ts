import { headers } from "next/headers";
import { WebhookReceiver } from "livekit-server-sdk";
import UserModel from "@/model/UserModel";
import StreamModel from "@/model/stream";

const receiver = new WebhookReceiver(
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export async function POST(req: Request) {
  const body = await req.text();
  const headerPayload = headers();
  const authorization = headerPayload.get("Authorization");

  if (!authorization) {
    return new Response("No authorization header", { status: 400 });
  }

  const event = await receiver.receive(body, authorization);

  if (event.event === "ingress_started") {
    await StreamModel.findOneAndUpdate(
      { ingressId: event.ingressInfo?.ingressId },
      { $set: { isLive: true } },
      { new: true }
    );
  }

  if (event.event === "ingress_ended") {
    await StreamModel.findOneAndUpdate(
      { ingressId: event.ingressInfo?.ingressId },
      { $set: { isLive: false } },
      { new: true }
    );
  }
}
