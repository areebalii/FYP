import { Router } from "express"
import { getAllProducts } from "../controllers/product.controller.js"

const router = Router()

router.route("/get-all-products").get(getAllProducts)

export default router