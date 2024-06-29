import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { connect } from "../../../../dbconfig/dbconfig";
import User from "../../../../model/UserModel";

connect();

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType == "user.created") {
    try {
      await User.create({
        username: payload.data.username,
        exUserid: payload.data.id,
        imageUrl: payload.data.image_url,
      });
      console.log("User stored in MongoDB Database Successfully");
    } catch (e) {
      console.log("Error occured while storing user in MongoDB Database", e);
    }
  }

  if (eventType == "user.updated") {
    try {
      await User.updateOne(
        { exUserid: payload.data.id },
        {
          $set: {
            username: payload.data.username,
            imageUrl: payload.data.image_url,
          },
        }
      );
    } catch (e) {
      console.log("Error occured while updating user in MongoDB Database", e);
    }
  }

  if (eventType == "user.deleted") {
    try {
      await User.deleteOne({ exUserid: payload.data.id });
    } catch (e) {
      console.log("Error occured while deleting user in MongoDB Database", e);
    }
  }

  return new Response("", { status: 200 });
}
