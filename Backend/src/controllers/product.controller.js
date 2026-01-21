import { asyncHandler } from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

  //  GET ALL PRODUCTS
export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find()
    .populate("category", "categoryName")
    .lean();

  if (!products || products.length === 0) {
    throw new ApiError(404, "No products found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, products, "Products fetched successfully"));
});

  //  CREATE PRODUCT
export const createNewProduct = asyncHandler(async (req, res) => {
  const {
    productName,
    productDescription,
    category,
    price,
    brand,
    stock,
    colors,
    sizes,
  } = req.body;

  // Required field validation
  if (
    !productName ||
    !productDescription ||
    !category ||
    price === undefined ||
    stock === undefined
  ) {
    throw new ApiError(400, "All required fields must be provided");
  }

  // Image validation
  if (!req.file) {
    throw new ApiError(400, "Product image is required");
  }

  // Check if product already exists
  const existingProduct = await Product.findOne({
    productName: productName.trim(),
  });

  if (existingProduct) {
    throw new ApiError(409, "Product already exists");
  }

  // Upload image
  const uploadedImage = await uploadOnCloudinary(req.file.path);

  if (!uploadedImage?.secure_url) {
    throw new ApiError(500, "Product image upload failed");
  }

  // Create product
  const newProduct = await Product.create({
    productName: productName.trim(),
    productDescription,
    productImage: uploadedImage.secure_url,
    category,
    price,
    brand,
    stock,
    colors,
    sizes,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, newProduct, "Product created successfully"));
});
