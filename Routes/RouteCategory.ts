import { Router } from "express";
import CategoryController from "../Controllers/CategoryController"

const CategoryRoutes = Router()



CategoryRoutes.post("/create",CategoryController.CreateCategory)
CategoryRoutes.get("/all",CategoryController.getAllCategories)
CategoryRoutes.put("/update",CategoryController.UpdateCategory)
CategoryRoutes.delete("/delete",CategoryController.DeleteCategory)


export default CategoryRoutes