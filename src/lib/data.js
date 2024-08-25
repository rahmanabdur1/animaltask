import { Animal } from "./models";
import { connectToDb } from "./utils";



export const getAnimal = async () => {
    try {
      connectToDb();
      const posts = await Animal.find();
      return posts;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }
  };
  