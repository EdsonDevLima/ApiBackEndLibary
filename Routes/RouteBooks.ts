import { Router } from "express";
import upload from "../Helpers/UploadFiles";
import BooksController from "../Controllers/BooksController";



const RoutesBooks = Router()
RoutesBooks.post("/create",upload.single("file"),BooksController.createBook)
RoutesBooks.get("/all",BooksController.GetAllBooks)
RoutesBooks.get("/book/:id",BooksController.GetBookById)
RoutesBooks.delete("/delete",BooksController.DeleteBook)
RoutesBooks.put("/update",BooksController.UpdateBook)

export default RoutesBooks  
