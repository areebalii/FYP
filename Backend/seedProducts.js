import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./src/models/product.model.js";
import Category from "./src/models/category.model.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");

    await Product.deleteMany();

    const electronics = await Category.findOne({ categoryName: "Electronics" });
    const mobiles = await Category.findOne({ categoryName: "Mobiles" });
    const fashion = await Category.findOne({ categoryName: "Fashion" });

    const products = [
      // 📱 MOBILES
      {
        productName: "iPhone 14 Pro",
        productDescription: "Apple smartphone with A16 Bionic chip and ProMotion display",
        productImage: "https://res.cloudinary.com/demo/image/upload/iphone14.jpg",
        price: 350000,
        stock: 10,
        brand: "Apple",
        category: mobiles._id,
        colors: ["Black", "Gold", "Purple"],
        rating: 4.8,
        numReviews: 120,
      },
      {
        productName: "Samsung Galaxy S23",
        productDescription: "Flagship Android phone with Snapdragon processor",
        productImage: "https://res.cloudinary.com/demo/image/upload/s23.jpg",
        price: 280000,
        stock: 15,
        brand: "Samsung",
        category: mobiles._id,
        colors: ["Green", "Black"],
        rating: 4.6,
        numReviews: 90,
      },
      {
        productName: "Google Pixel 8",
        productDescription: "Pure Android experience with advanced AI camera",
        productImage: "https://res.cloudinary.com/demo/image/upload/pixel8.jpg",
        price: 240000,
        stock: 8,
        brand: "Google",
        category: mobiles._id,
        colors: ["Blue", "Black"],
      },
      {
        productName: "OnePlus 11",
        productDescription: "Fast performance with smooth AMOLED display",
        productImage: "https://res.cloudinary.com/demo/image/upload/oneplus11.jpg",
        price: 210000,
        stock: 12,
        brand: "OnePlus",
        category: mobiles._id,
      },

      // 💻 ELECTRONICS
      {
        productName: "Dell XPS 13",
        productDescription: "Premium ultrabook with Intel Core i7 processor",
        productImage: "https://res.cloudinary.com/demo/image/upload/dellxps.jpg",
        price: 450000,
        stock: 5,
        brand: "Dell",
        category: electronics._id,
      },
      {
        productName: "MacBook Air M2",
        productDescription: "Apple laptop powered by M2 chip",
        productImage: "https://res.cloudinary.com/demo/image/upload/macbookair.jpg",
        price: 520000,
        stock: 6,
        brand: "Apple",
        category: electronics._id,
      },
      {
        productName: "HP Pavilion 15",
        productDescription: "Reliable laptop for everyday tasks",
        productImage: "https://res.cloudinary.com/demo/image/upload/hppavilion.jpg",
        price: 260000,
        stock: 10,
        brand: "HP",
        category: electronics._id,
      },
      {
        productName: "Sony WH-1000XM5",
        productDescription: "Noise cancelling wireless headphones",
        productImage: "https://res.cloudinary.com/demo/image/upload/sonyheadphones.jpg",
        price: 90000,
        stock: 20,
        brand: "Sony",
        category: electronics._id,
      },

      // 👕 FASHION
      {
        productName: "Men Cotton T-Shirt",
        productDescription: "Comfortable cotton t-shirt for daily wear",
        productImage: "https://res.cloudinary.com/demo/image/upload/tshirt.jpg",
        price: 2500,
        stock: 50,
        brand: "Local Brand",
        category: fashion._id,
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Black"],
      },
      {
        productName: "Women Summer Dress",
        productDescription: "Lightweight floral summer dress",
        productImage: "https://res.cloudinary.com/demo/image/upload/dress.jpg",
        price: 6500,
        stock: 30,
        brand: "Zara",
        category: fashion._id,
        sizes: ["M", "L"],
      },
      {
        productName: "Men Denim Jeans",
        productDescription: "Classic blue denim jeans",
        productImage: "https://res.cloudinary.com/demo/image/upload/jeans.jpg",
        price: 7000,
        stock: 40,
        brand: "Levis",
        category: fashion._id,
        sizes: ["32", "34", "36"],
      },
      {
        productName: "Women Handbag",
        productDescription: "Stylish leather handbag",
        productImage: "https://res.cloudinary.com/demo/image/upload/handbag.jpg",
        price: 12000,
        stock: 18,
        brand: "Gucci",
        category: fashion._id,
      },

      // ⌚ ACCESSORIES
      {
        productName: "Apple Watch Series 9",
        productDescription: "Smartwatch with health tracking features",
        productImage: "https://res.cloudinary.com/demo/image/upload/applewatch.jpg",
        price: 130000,
        stock: 14,
        brand: "Apple",
        category: electronics._id,
      },
      {
        productName: "Samsung Galaxy Buds Pro",
        productDescription: "Wireless earbuds with ANC",
        productImage: "https://res.cloudinary.com/demo/image/upload/buds.jpg",
        price: 45000,
        stock: 25,
        brand: "Samsung",
        category: electronics._id,
      },
      {
        productName: "Logitech MX Master 3",
        productDescription: "Advanced wireless mouse for professionals",
        productImage: "https://res.cloudinary.com/demo/image/upload/mouse.jpg",
        price: 28000,
        stock: 22,
        brand: "Logitech",
        category: electronics._id,
      },
    ];

    await Product.insertMany(products);
    console.log("✅ 15 Products seeded successfully");

    process.exit();
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();
