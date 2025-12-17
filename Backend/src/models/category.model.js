import mongoose from "mongoose";  

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Category name is required"],
    },
    subCategoryName: {
      type: String,
    },


  
  },
  { timestamps: true }
);
s
export const Category = mongoose.model("Category", categorySchema);
