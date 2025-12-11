import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()

    // Store refresh token in database
    user.refreshTokens = refreshToken
    await user.save({ validateBeforeSave: false })

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Error generating tokens")
  }
}

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

export const loginUser = asyncHandler(async (req, res) => {
  // get data from frontend using req.body
  // check if username or email and password are provided
  // find user
  // compare login credentials
  // if all good generate JWT token
  // send token to frontend using cookies

  const { username, email, password } = req.body;
  console.log(email, username)
  if (!email && !username) {
    throw new ApiError(400, "Username or email is required")
  }
  // if (!password) {
  //   throw new ApiError(400, "Password is required")
  // }
  const user = await User.findOne(
    {
      $or: [{ email }, { username }]
    }
  )
  if (!user) {
    throw new ApiError(404, "User not found")
  }
  const isPasswordValid = await user.isPasswordCorrect(password)
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials")
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

  const loggedInUser = await User.findById(user._id).select("-password -refreshTokens")
  const options = {
    httpOnly: true,
    secure: true
  }
  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser, accessToken, refreshToken
        },
        "User logged in successfully"
      )
    )

})

export const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    {
      new: true
    }
  )
  const options = {
    httpOnly: true,
    secure: true,
  }
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, null, "User logged out successfully"))
})

export const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized access - No refresh token provided")
  }

  try {
    const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)

    const user = await User.findById(decodedToken?._id)
    if (!user) {
      throw new ApiError(401, "Refresh token is expired or used")
    }

    if (incomingRefreshToken !== user?.refreshTokens) {
      throw new ApiError(401, "Invalid refresh token")
    }
    const options = {
      httpOnly: true,
      secure: true
    }
    const { accessToken, newRefreshToken } = await generateAccessAndRefreshToken(user._id)

    return res
      .status(200)
      .cookie("refreshToken", newRefreshToken, options)
      .cookie("accessToken", accessToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed successfully"
        )
      )
  } catch (error) {
    throw new ApiError(401, "Unauthorized access - Invalid refresh token")
  }

})