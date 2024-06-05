import { Sequelize } from "sequelize";


const ConnDb = new Sequelize("LidraryDb","root","",{host:"localhost",dialect:"mysql"})


const run = async ()=>{
try{
await  ConnDb.authenticate()
}catch(e){
  console.log(e)
}

}
const VeryfyDataBase = async ()=>{
  //verificar se o banco existe
  const [results] = await ConnDb.query(
    "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = 'LidraryDb'"
  );


  if(!results.length){
    await ConnDb.query("CREATE DATABASE LidraryDb ")
  }

}

run()
VeryfyDataBase()
export default ConnDb

