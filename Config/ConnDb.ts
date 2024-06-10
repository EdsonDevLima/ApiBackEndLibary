import { Sequelize } from "sequelize";


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

