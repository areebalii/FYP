import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
    },
    productDescription: {
      type: String,
      required: [true, "Description is required"],
    },
    productImage: {   // URLs from Cloudinary
      type: String,
      required: [true, "Product image is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    brand: {
      type: String,
      default: "Local Brand",
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    colors: [String],
    sizes: [String],

    // AI integration fields
    embeddings: {
      type: [Number], // store vector representation for AI search
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
