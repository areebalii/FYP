import { asyncHandler } from "../utils/asyncHandler.js"

export const registerUser = asyncHandler(async (req, res) => {
  res.send("User registered")
  res.status(200).json({ 
    message: "User registered successfully"
  })
})