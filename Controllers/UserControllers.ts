import { Request,Response } from "express";
import UsersModel from "../Models/UsersModel"
class UserController{
  static async RegisterUser(req:Request,res:Response){
   const [UserName,Email,Passoword,ConfirmPassword] = req.body
   if(UserName == "" ||UserName ==  null)
    {
      res.status(401).json({message:"Usuario obrigatorio"})
      return
    }
   if(Email == "" ||Email ==  null)
    {
      res.status(401).json({message:"Email obrigatorio"})
      return
    }
   if(Passoword == "" ||Passoword ==  null)
    {
      res.status(401).json({message:"senha obrigatoria"})
      return
   }
   if(ConfirmPassword == "" ||ConfirmPassword ==  null)
    {
      res.status(401).json({message:"Confirmaçao senha obrigatoria"})
      return

    }
    const VerifyExists = await UsersModel.findOne({where:Email})
    if(VerifyExists){
      res.status(401).json({message:"Email ja esta sendo usado"})
      return 
    }
    if(ConfirmPassword !== Passoword){
      res.status(401).json({message:"Erro na confirmaçao de senha"})
    }

  }
}

export default UserController