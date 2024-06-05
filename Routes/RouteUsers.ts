import { Router } from "express";
import UserController from "../Controllers/UserControllers";

const UsersRoutes = Router()

UsersRoutes.post("/register",UserController.RegisterUser)


export default UsersRoutes