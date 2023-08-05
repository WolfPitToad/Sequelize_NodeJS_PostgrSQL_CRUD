import {Project} from '../models/Project.js'
import { Task } from '../models/Task.js'

export const getProjects= async (req,res)=>{
    try{
        const projects = await Project.findAll()
        res.json(projects)
    }catch(error){
        return res.status(500).json({message: error.message});
    }

}
export const createProjects= async (req,res)=>{
    try{
        const{name,priority,description}=req.body
        const newProject= await Project.create({
            name,
            description,
            priority
        })
        res.json(newProject)
    }catch(error){
        return res.status(500).json({message: error.message});
    }

}

export const updateProject= async(req,res)=>{
    const{id}=req.params
    try{
        const project= await Task.findOne({
            where:{id}
        })
        project.set(req.body)
        //findOne tambien funciona
        await project.save()
        return res.json(project)
    }catch{
        return res.status(500).json({message: error.message})


    }
   
}

export const deleteProject= async(req,res)=>{
    try{
        const {id}=req.params
        await Project.destroy({
            where:{
                id,
            }
        })
        res.sendStatus(204)

    }catch(error){
        return res.status(500).json({message: error.message})

    }

}

export const getProjectby= async(req,res)=>{
    try{
        const{id}= req.params
        const project= await Project.findOne({
            where:{
                id
            }
        })
        if(!project) {
            return res.status(404).json({message:'Projecto no existe'})
        }
        res.json(project)
    }catch(error){
        return res.status(500).json({message:error.message})

    }

}

export const getProjectTask = async(req,res)=>{
    try{
        const{id}=req.params
        const tasks=await Task.findAll({
            where:{projectId:id}
        })
        res.json(tasks)
    }catch(error){
        res.status(500).json({message:message.error})

    }
   
}