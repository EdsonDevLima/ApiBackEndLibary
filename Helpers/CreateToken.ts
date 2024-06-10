import jwt from "jsonwebtoken"


const createToken = async (id:Number,Email:String):Promise<String>=>{
  

  try{
    const token = await jwt.sign({id:id,Email:Email},"minhaAssinaturacombrcombr")
    return token    

  }catch(err){
    return `${err}`
  }
}

export default createToken