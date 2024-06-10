import { Request,Response } from "express";
import UsersModel from "../Models/UsersModel"
import bcrypt from "bcrypt"
import createToken from "../Helpers/CreateToken";



class AuthController{
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


    
    try{
    const PasswordSalt = await bcrypt.genSalt(12)
    const PassowrdHash = await bcrypt.hash(Password,PasswordSalt) 
    const newUser = {UserName:UserName,Email:Email,PasswordHash:PassowrdHash}      
      const nUser =  await UsersModel.create(newUser)
      const idUser = await nUser.getDataValue("id")
      const token:String = await createToken(idUser,newUser.Email)
      res.status(201).json({message:"Usuario registrado com sucesso",token:token})
    }catch(er){
      res.status(500).json({message:er})
      return
    }

  

  }
  static async LoginUser(Req:Request,Res:Response){
    const {Email,Password} = Req.body
    if(!Email){
      Res.status(401).json({message:"Email obrigatorio"})
      return

    }
    if(!Password){
      Res.status(401).json({message:"Senha obrigatoria"})
      return
    }
    const user = await UsersModel.findOne({where:{Email:Email}})
    if(!user){
      Res.status(401).json({message:"Conta não encontrada"})
      return
    }
     const dbpass = user.getDataValue("PasswordHash")
     const validation = await bcrypt.compare(Password,dbpass)
   if(!validation)
    {
     Res.status(401).json({message:"Senha incorreta"})
       return
    }
    try{
        const token = await createToken(user.getDataValue("id"),user.getDataValue("Email"))
        Res.status(201).json({message:"usuario logado",token:token})
      
      
    }
    catch(err){

      Res.status(500).json({message:err})
    }


  }
}

export default AuthController