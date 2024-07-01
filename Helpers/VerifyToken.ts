import { Request,Response,NextFunction } from "express"
import GetToken from "./GetToken"
import jwt from "jsonwebtoken"
import UsersModel from "../Models/Users"


const verifyToken =async (Req:Request,Res:Response,Next:NextFunction)=>{

  const token = GetToken(Req)
  if(token == ""){
     Res.status(402).json({message:"token vazio"})
     return
  }
  try{
    const validation  =  jwt.verify(token,"minhaAssinaturacombrcombr") as {id:string,Email:string}
    const id = validation.id
    const Email = validation.Email
    const user = await UsersModel.findOne({where:{email:Email,id:id}})
    if(user !== null){
      console.log(user)
      Next()
      return
    }
    


  }catch(err){
    Res.status(402).json({message:"Erro ao verificar token",err})
    return 
  }
  
  
  






}

export default verifyToken