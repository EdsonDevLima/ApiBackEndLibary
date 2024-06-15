import { Request,Response } from "express";
import Books from "../Models/Books";
import Category from "../Models/Category";


class BooksController {
    static async createBook(Req:Request,Res:Response){
      const {Name,Author,amount,CategoryId} = Req.body
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
      if(!amount){
        Res.status(401).json({message:"quantidade obrigatoria"})
        return
      }
      if(!CategoryId){
        Res.status(401).json({message:"categoria obrigatoria"})
        return
      }
      const verifyCategoryId = await Category.findOne({where:{id:Category}})

      if(!verifyCategoryId){
        Res.status(401).json({message:"categoria nao encontrada"})
        return
      }
      const newBook = {Name,Author,amount,Image,CategoryId}
      try{
       await Books.create(newBook)
       Res.status(200).json({message:"livro criado com sucesso"})
       return
      }catch(err){
        Res.status(500).json({message:"erro no servidor",err})
        return
      }
      
      
    }
    static async GetAllBooks(Req:Request,Res:Response){
      try{
        const AllBooks = await Books.findAll()
         Res.status(200).json({AllBooks})
        return
      }catch(err){
         Res.status(500).json({message:"error server",err})
        return
      }
    }
    static async DeleteBook(Req:Request,Res:Response){
      const {id} = Req.body
      try{
      await  Books.destroy({where:{id:id}})
      Res.status(201).json({message:"livro excluido"})
      return
      }catch(err){
        Res.status(500).json({message:err})
        return 
      }
    }
    static async UpdateBook(Req:Request,Res:Response){
      const {Name,Author,amount,id} = Req.body
      const file = Req.file?.fieldname
      if(!file){
        Res.status(401).json({message:"Arquivo obrigatorio"})
      }
      const book = await Books.findOne({where:{id:id}})
      if(!book){
        Res.status(201).json({message:"livro nao encontrado"})
        return
      }
      
      try{
      await  Books.update({Name:Name,Author:Author,amount},{where:{id:id}})
      Res.status(201).json({message:"livro excluido"})
      return
      }catch(err){
        Res.status(500).json({message:err})
        return 
      }
    }
    
}
export default BooksController