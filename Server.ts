import express from "express"
import ConnDb from "./Config/ConnDb";
import UsersRoutes from "./Routes/RouteUsers"

const app = express();

//config de leitura de corpo da requisiçao
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//rotas
app.use("/auth",UsersRoutes)



ConnDb.sync()
.then(()=>
  {
    app.listen(3000,()=>{
    console.log("servidor ligado")
  })

})
.catch((e)=>
  { 
    console.log("erro ao tentar iniciar conecçao com o banco")
    console.log(e)

  })
