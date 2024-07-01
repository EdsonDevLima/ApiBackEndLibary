import { Router } from "express";
import AuthController from "../Controllers/AuthController";

const UsersRoutes = Router()

UsersRoutes.post("/register",AuthController.RegisterUser)
UsersRoutes.post("/login",AuthController.LoginUser)
UsersRoutes.post("/getuser",AuthController.getUser)


export default UsersRoutes