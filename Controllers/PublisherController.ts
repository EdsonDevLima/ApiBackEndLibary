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

}

export default PublisherController