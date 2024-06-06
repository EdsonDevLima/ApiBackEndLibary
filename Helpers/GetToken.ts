import { Request } from "express"
const GetToken = (Req:Request):string=>{

  const tokenBearer:string = Req.headers.authorization || ""
  const token = tokenBearer.split("")[1]
  return token
}


export default GetToken