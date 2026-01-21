import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload image to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    })
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    // file is uploaded successfully
    console.log("File uploaded to Cloudinary successfully", response.url);
    fs.unlinkSync(localFilePath); // delete the local file after upload
    return response
  } catch (error) {
    fs.unlinkSync(localFilePath); // delete the local file in case of error
    return null;
  }
}

export { uploadOnCloudinary };