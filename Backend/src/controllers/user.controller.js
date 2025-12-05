import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { username, fullName, email, password, address, avatar } = req.body;
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

  // check if user already exists
  const existedUser = await User.findOne({
    $or: [{ email }, { username }]
  })
  if (existedUser) {
    throw new ApiError(409, `User with email or username already exists`)
  }

const avatarLocalPath = req.file?.path
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is required")
  }

  // upload avatar to cloudinary
  const avatarImage = await uploadOnCloudinary(avatarLocalPath)
  if (!avatarImage) {
    throw new ApiError(500, "Error uploading avatar image")
  }

  const user = await User.create({
    fullName,
    avatar: avatarImage.url,
    username: username.toLowerCase(),
    email,
    password,
    address
  })

  const createdUser = await User.findById(user._id).select(
    "-password -refreshTokens"
  )
  if (!createdUser) {
    throw new ApiError(500, "some thing went wrong while registering user")
  }

  return res.status(201).json(
    new ApiResponse(200, createdUser, "User registered successfully")
  )

})