import { Router } from "express";
import AuthController from "../Controllers/AuthController";

const UsersRoutes = Router()

UsersRoutes.post("/register",AuthController.RegisterUser)
UsersRoutes.post("/login",AuthController.LoginUser)


export default UsersRoutes