import ConnDb from "../Config/ConnDb"
import { DataTypes } from "sequelize"
const roles = ConnDb.define("roles",{name:DataTypes.STRING,role:DataTypes.NUMBER},)



//funçao de criaçao das permissoes do usuario
export const createRoles = async ()=>{
  const verifyRole = await roles.findAll()
  if(!verifyRole){
  await roles.create({name:"Admin",role:3})
  await roles.create({name:"Supervisor",role:2})
  await roles.create({name:"User",role:1})
  }



}

export default roles