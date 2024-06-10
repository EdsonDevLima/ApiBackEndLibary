import { Router } from "express";
import AuthController from "../Controllers/AuthControllers";

const UsersRoutes = Router()

UsersRoutes.post("/register",AuthController.RegisterUser)
UsersRoutes.post("/login",AuthController.LoginUser)


export default UsersRoutes