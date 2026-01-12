import axios from "axios";
import Product from "./src/models/product.model.js";

const seedProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");

  await Product.deleteMany(); // optional
  await Product.insertMany(data);

  console.log("Products seeded successfully");
};

export default seedProducts;
