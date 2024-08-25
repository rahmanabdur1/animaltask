"use server";

import { revalidatePath } from "next/cache";

import { connectToDb } from "./utils";
import {Animal, Category } from "./models";


export const addCategory = async (prevState, formData) => {
  const { categoryName } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newCategory = new Category({
      name: categoryName, // Changed from categoryName to name
    });

    await newCategory.save();
    console.log("saved to db");
    revalidatePath("/");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};



export const addAnimal = async (prevState, formData) => {
  const { animalName, imageUrl } = Object.fromEntries(formData);
  console.log({ animalName, imageUrl }); 
  

  try {
    await connectToDb();

    const newAnimal = new Animal({
      name: animalName,
      image: imageUrl
    });

    await newAnimal.save(); 

    console.log("Animal saved to the database");
    revalidatePath("/");
    revalidatePath("/");

    return { success: true };
  } catch (err) {
    console.error("Error saving animal:", err);
    return { error: "Something went wrong!" };
  }
};