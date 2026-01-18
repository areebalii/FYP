import { asyncHandler } from "../utils/asyncHandler.js"
import Product from "../models/product.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"

// Get all products
export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().populate("category", "categoryName").lean()
  console.log(products);
  if (!products || products.length === 0) {
    throw new ApiError(404, "No products found")
  }
  return res
    .status(200)
    .json(new ApiResponse(200, products, "Products fetched successfully"))


})  