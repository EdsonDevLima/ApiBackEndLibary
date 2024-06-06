import { Request,Response } from "express";
import UsersModel from "../Models/UsersModel"
import bcrypt from "bcrypt"
import jsonWebtoken from "jsonwebtoken"


class UserController{
  static async RegisterUser(req:Request,res:Response){
   const {UserName,Email,Password,ConfirmPassword} = req.body
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
   if(Password == "" ||Password ==  null)
    {
      res.status(401).json({message:"senha obrigatoria"})
      return
   }
   if(ConfirmPassword == "" ||ConfirmPassword ==  null || Password != ConfirmPassword)
    {
      res.status(401).json({message:"Confirmaçao senha obrigatoria"})
      return

    }
    const VerifyExists = await UsersModel.findOne({where:{Email:Email}})
    if(VerifyExists){
      res.status(401).json({message:"Email ja esta sendo usado"})
      return 
    }
    const PasswordSalt:string = await bcrypt.genSalt(10)
    const PassowordHash:string = await bcrypt.hashSync(Password,PasswordSalt) 
    const newUser = {UserName:UserName,Email:Email,PassowordHash:PassowordHash}
    try{
      UsersModel.create(newUser)
      res.status(201).json({message:"Usuario registrado com sucesso"})
    }catch(er){
      res.status(500).json({message:er})
      return
    }

  

  }
}

export default UserController