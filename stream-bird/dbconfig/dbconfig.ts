import mongoose from "mongoose";

type connectiontype = {
  isConnected: number;
};

let connection: connectiontype = {
  isConnected: 0,
};

export async function connect() {
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DB_URI!);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(e);
  }
}
