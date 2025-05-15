import { StreamChat } from "stream-chat";
import "dotenv/config";

const apikey = process.env.STREAM_API_KEY;
const apisecret = process.env.STREAM_API_SECRET;

if (!apikey || !apisecret) {
  console.error("Stream api key or secret missing");
}

const streamClient = StreamChat.getInstance(apikey, apisecret);

// function that allow us to create/update a user
export const upsertStreamUser = async (userData) => {
  try {
    // Correct usage - pass an object with id, name, and optional image
    await streamClient.upsertUser({
      id: userData.id,
      name: userData.name,
      image: userData.image || "",
      role: "user", // optional but recommended
    });
    return userData;
  } catch (error) {
    console.error("Error upserting stream user", error);
    throw error; // Re-throw to handle in calling function
  }
};

// do it later
export const generateStreamToken = (userId) => {
  try {
    // ensure user id is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating stream token", error);
  }
};
