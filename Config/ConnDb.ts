import { Sequelize } from "sequelize";
import roles from "../Models/Roles";

const ConnDb = new Sequelize("LidraryDb","root","",{host:"localhost",dialect:"mysql"})


const run = async ()=>{
try{
await  ConnDb.authenticate()





}catch(e){
  console.log(e)
}
}



run()

export default ConnDb

