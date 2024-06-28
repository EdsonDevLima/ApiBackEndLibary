import { Request,Response } from "express";
import Books from "../Models/Books";
import Category from "../Models/Category";



class BooksController {
    static async createBook(Req:Request,Res:Response)
    {
      
      const {Name,Author,Amount,PriceUnit,CategoryId,Publisher} = Req.body
      const Image = Req.file?.filename

        if(!Req.file)
        {
          Res.status(401).json({message:"arquivos obrigatorios"})
          return
        }
        if(!Name)
        {
          Res.status(401).json({message:"nome obrigatorio"})
          return
        }
        if(!Publisher)
          {
            Res.status(401).json({message:"Editora obrigatoria"})
            return
          }
        if(!Author)
        {
          Res.status(401).json({message:"autor obrigatorio"})
          return
        }
        if(!Amount)
        {
          Res.status(401).json({message:"quantidade obrigatoria"})
          return
        }
        if(!CategoryId)
        {
          Res.status(401).json({message:"categoria obrigatoria"})
          return
        }
        if(!PriceUnit)
        {
          Res.status(401).json({message:"Preço unitario obrigatorio"})
          return
        }

      const verifyCategoryId = await Category.findOne({where:{id:CategoryId}})
  

        if(!verifyCategoryId)
        {
          Res.status(401).json({message:"categoria nao encontrada"})
          return
        }


      const newBook = {Name,Author,Amount,Image,Publisher,CategoryId:CategoryId,PriceUnit}

        try
        {
          await Books.create(newBook)
          Res.status(200).json({message:"livro criado com sucesso"})
          return
        }catch(err)
        {
          Res.status(500).json({message:"erro no servidor",err})
          return
        }}
//-----------//
//-----------//
//-----------//
    static async GetAllBooks(Req:Request,Res:Response)
    {
      try
      {
        const AllBooks = await Books.findAll()
         Res.status(200).json({AllBooks})
        return
      }
      catch(err)
      {
         Res.status(500).json({message:"error server",err})
        return
      }
    }
//-----------//
//-----------//
//-----------//
    static async DeleteBook(Req: Request, Res: Response) 
    {
      const { id } = Req.body;
      
      console.log('Requisição recebida:', Req.body); // Log para verificação
  
      // Verificação do corpo da requisição
      if (!id) {
          Res.status(400).json({ message: "ID é obrigatório" });
          return;
      }
  
      try {
          // Tentativa de deletar o livro
          const result = await Books.destroy({ where: { id: id } });
  
          // Verificação se algum livro foi deletado
          if (result === 0) {
              Res.status(404).json({ message: "Livro não encontrado" });
          } else {
              Res.status(200).json({ message: "Livro excluído com sucesso" });
          }
      } catch (err) {
          console.error('Erro ao excluir livro:', err); // Log de erro
          Res.status(500).json({ message: "Erro no servidor", error: err });
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
    static async GetBookById(Req:Request,Res:Response){
      const id = Req.params.id
      if(!id){
        Res.status(401).json({message:"id  do livro nao encontrado"})
        return
      }
      try{
        const book = await Books.findOne({where:{id:id}})
        Res.status(401).json({message:"livro encontrado",book})
        return

      }catch(err){
        Res.status(500).json({message:"error server",err})
        return

      }

    }
    
}
export default BooksController