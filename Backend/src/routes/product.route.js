import { Router } from "express"
import { createNewProduct, getAllProducts } from "../controllers/product.controller.js"
import { upload } from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/get-all-products").get(getAllProducts)
router.post(
  "/create-product",
  upload.single("productImage"), // multer runs FIRST
  createNewProduct
);

export default router