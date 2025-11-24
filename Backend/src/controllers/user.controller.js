import { asyncHandler } from "../utils/asyncHandler.js"

export const registerUser = asyncHandler(async (req, res) => {
  //  get user details from frontend
  // validation
  //  check if user already exists
  // hash password
  // create user object
  // save user to database
  // send response

  const { username, fullName, email, password, address, avatar } = req.body;
  console.log("Email received:", email);
  
  
})