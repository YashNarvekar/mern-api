import mongoose from "mongoose";

export const Connection = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database conneted successfully");
  } catch (error) {
    console.log("Error while connecting to DB", error.message);
  }
};

export default Connection;
