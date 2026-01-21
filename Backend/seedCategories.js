import mongoose from "mongoose";
import dotenv from "dotenv";
import  Category  from "./src/models/category.model.js";

dotenv.config();

const categories = [
  { categoryName: "Electronics" },
  { categoryName: "Fashion" },
  { categoryName: "Home Appliances" },
  { categoryName: "Books" },
  { categoryName: "Mobiles" },
];

const seedCategories = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");

    await Category.deleteMany(); // optional (clean old data)

    await Category.insertMany(categories);
    console.log("Categories seeded successfully");

    process.exit();
  } catch (error) {
    console.error("Error seeding categories:", error);
    process.exit(1);
  }
};

seedCategories();
