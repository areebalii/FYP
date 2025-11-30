import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"

export const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation
  // check if user already exists
  // hash password
  // create user object
  // save user to database
  // send response

  const { username, fullName, email, password, address, avatar } = req.body;
  console.log("Email received:", email);

  // traditional way of checking each field
  // if(fullName === "") {
  //   throw new ApiError(400, "All fields are required")
  // }

  // advanced way of checking all fields
  if (
    [username, fullName, email, password, address].some((fields) => fields?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required")
  }

})