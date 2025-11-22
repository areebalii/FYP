import asyncHandler from "../utils/asyncHandler.js"

const registerUser = asyncHandler(async (req, res) => {
  res.send("User registered")
  res.status(200).json({
    success: true,
    message: "User registered successfully"
  })
})