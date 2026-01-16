import { asyncHandler } from "../utils/asyncHandler"
import { Product } from "../models/product.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"



export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.status(200).json(new ApiResponse(200, "Products fetched successfully", products))
}).json(
  new ApiResponse(
    200,
    null,
    "Products fetched successfully"
  )
)