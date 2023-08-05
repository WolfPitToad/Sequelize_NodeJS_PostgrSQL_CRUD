import {Task} from '../models/Task.js'

export const getTask=async(req, res)=>{
    try{
        const task = await Task.findAll()
        res.json(task)
    }catch(error){
        return res.status(500).json({message:error.message})

    }

}
export const createTask=async(req, res)=>{
    try{
        const {name,done,projectId}=req.body
        const newTask= await Task.create({
            name,
            done,
            projectId
        })
        res.json(newTask)
    }catch(error){
        return res.status(500).json({message:message.error})

    }

}

export const deleteTask=async(req,res)=>{
    const{id}=req.params
    try{
        const result= await Task.destroy({
            where:{id}
        })
        return res.status(204)
    }catch(error){
        return res.status(500).json({message:message.error})

    }

}

export const updateTask=async(req,res)=>{
    const{id}=req.params
    try{
        const task= await Task.findOne({
            where:{id}
        })
        task.set(req.body)
        await task.save()
        return res.json(task)

    }catch(error){
        return res.status(500).json({message:message.error})
    }
}

export const getTaskby=async(req,res)=>{
    const{id}= req.params
    try{
        const task= await Task.findOne({
            where:{id},
            attributes:['name','projectId']
        })
        res.json(task)

    }catch(error){
        return res.status(500).json({message:message.error})

    }
}