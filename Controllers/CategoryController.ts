import { Request,Response } from "express"
import Category from "../Models/Category"



class CategoryController{
    static async CreateCategory(Req:Request,Res:Response){
            const {Name} = Req.body
            if(!Name){
                Res.status(401).json({message:"nome da categoria obrigatoria"})
                return
            }
            try{
                await Category.create({Name:Name})
                Res.status(201).json({message:"Categoria criada com sucesso"})
                return
            }catch(err){
                Res.status(500).json({message:"Categoria criada com sucesso"})
                return

            }
    }
    
    static async getAllCategories(Req:Request,Res:Response){
        try{
            const allCategories = await Category.findAll()
            Res.status(200).json({message:"sucess",allCategories})
            return
        }
        catch(err){
            Res.status(500).json({message:"server error",err})
            return

        }
    }
    static async DeleteCategory(Req:Request,Res:Response){
        const {id} = Req.body
        try{
            await Category.destroy({where:{id:id}})
            Res.status(200).json({message:"categoria excluida"})
            return
        }
        catch(err){
            Res.status(500).json({message:"server error",err})
            return
        }
    }
    static async UpdateCategory(Req:Request,Res:Response){
        const {name,id} = Req.body
        const verifyCategory = await Category.findOne({where:{id:id}})
        if(!verifyCategory){
            Res.status(400).json({message:"categoria inexistente"})
            return   
        }
        try{
            await Category.update({Name:name},{where:{id:id}})
            Res.status(200).json({message:"categoria editada"})
            return
        }
        catch(err){
            Res.status(500).json({message:"Server error",err})
            return
        }
    }



    
}


export default CategoryController