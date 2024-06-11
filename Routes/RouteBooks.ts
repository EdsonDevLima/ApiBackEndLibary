import { Router } from "express";
import upload from "../Helpers/UploadFiles";
import BooksController from "../Controllers/BooksController";



const RoutesBooks = Router()
RoutesBooks.post("/create",upload.single("bookImage"),BooksController.createBook)


export default RoutesBooks
