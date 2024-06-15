import express,{Express} from "express"
//configs
import ConnDb from "./Config/ConnDb";
//rotas
import UsersRoutes from "./Routes/RouteUsers"
import RoutesBooks from "./Routes/RouteBooks";
import CategoryRoutes from "./Routes/RouteCategory";





const app = express();



//config de leitura de corpo da requisiçao
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//rotas
app.use("/auth",UsersRoutes)
app.use("/books",RoutesBooks)
app.use("/category",CategoryRoutes)


ConnDb.sync()
.then(()=>
  {
    app.listen(3000, async()=>
      {

        console.log("servidor ligado")

  }
  

  







  )

})
.catch((e)=>
  { 
    console.log("erro ao tentar iniciar conecçao com o banco")
    console.log(e)

  })
