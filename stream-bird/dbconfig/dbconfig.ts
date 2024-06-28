import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.DB_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongodb Connected");
    });

    connection.on("error", (err) => {
      console.log(
        "Mongodb connection error, please make sure mongodb is running",
        err
      );
      process.exit();
    });
  } catch (err) {
    console.log(
      "Mongodb connection error, please make sure mongodb is running",
      err
    );
  }
}
