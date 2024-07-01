import Publisher from "../Models/Publisher"
import { Request,Response } from "express"

class PublisherController{

    static async GetAllPublishers(Req:Request,Res:Response){
        
        try{
            const AllPublisher = await Publisher.findAll()
            Res.status(201).json({AllPublisher})
            return
        }
        catch(err){
            Res.status(500).json({err})
            return
        }
    }
    static async CreatePublisher(Req:Request,Res:Response){
        const {Name,Cnpj} = Req.body
        console.log(Name,Cnpj)
        if(!Name){
            Res.status(401).json({message:"Nome obrigatorio"})
            return
        }
        if(!Cnpj){
            Res.status(401).json({message:"Cnpj obrigatorio"})
            return
        }
        const newPublisher = {Name,Cnpj}
        try
        {
            await Publisher.create(newPublisher)
            Res.status(201).json({message:"Editora criada"})
            return
        }
        catch(err)
        {
            Res.status(501).json({message:"Erro com o servidor",err})
            return
        }
    }

}

export default PublisherController