import { Request,Response,NextFunction } from "express"
import GetToken from "./GetToken"
import jwt from "jsonwebtoken"



const verifyToken = (Req:Request,Res:Response,Next:NextFunction)=>{

  const token = GetToken(Req)
  if(token == ""){
     Res.status(402).json({message:"token vazio"})
     return
  }
  try{
    const validation  =  jwt.verify(token,"minhaAssinaturacombrcombr")
    if(validation){
      Next()
      return
    }
    


  }catch(err){
    Res.status(402).json({message:"Erro ao verificar token",err})
    return 
  }
  
  
  






}

export default verifyToken