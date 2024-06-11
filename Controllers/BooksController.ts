import { Request,Response } from "express";
import Books from "../Models/Books";
class BooksController {
    static async createBook(Req:Request,Res:Response){
      const {Name,Author,Amount} = Req.body
      const Image = Req.file?.filename
      if(!Req.file){
        Res.status(401).json({message:"arquivos obrigatorios"})
        return
      }
      if(!Name){
        Res.status(401).json({message:"nome obrigatorio"})
        return
      }
      if(!Author){
        Res.status(401).json({message:"autor obrigatorio"})
        return
      }
      if(!Amount){
        Res.status(401).json({message:"quantidade obrigatoria"})
        return
      }
      const newBook = {Name,Author,Amount,Image}
      try{
       await Books.create(newBook)
       Res.status(200).json({message:"livro criado com sucesso"})


      }catch(err){
        Res.status(500).json({message:"erro no servidor"})
        return
      }
      
      
    }
    static GetAllBooks(){}
    









}
export default BooksController