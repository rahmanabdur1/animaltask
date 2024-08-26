import { Category, Animal } from "./models";
import { connectToDb } from "./utils";


export const fetchProducts = async (q, page) => {
  console.log(`Search Query: ${q}`);
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 6;

  try {
    await connectToDb();
    const count = await Animal.find({ name: { $regex: regex } }).countDocuments();
    console.log(`Total Count: ${count}`);

    const products = await Animal.find({ name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    console.log(`Fetched Products:`, products);

    return { count, products };
  } catch (err) {
    console.error("Error Occurred:", err.message);
    throw new Error("Failed to fetch products!");
  }
};



export const getCategory = async () => {
  try {
    await connectToDb();
    const categories = await Category.find().lean();

    const formattedCategories = categories.map(category => ({
      ...category,
      _id: category._id.toString(), 
    }));

    return formattedCategories;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch categories!");
  }
};
