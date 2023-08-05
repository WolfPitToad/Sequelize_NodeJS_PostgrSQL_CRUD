import {Project} from '../models/Project.js'

export const getProjects= async (req,res)=>{
    try{
        const projects = await Project.findAll()
        res.json(projects)
    }catch{
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
    }catch{
        return res.status(500).json({message: error.message});
    }

}

export const updateProject= async(req,res)=>{
    try{
        const{id}=req.params
        const{name,priority,description}=req.body
        const project = await Project.findByPk(id)
        project.name=name
        project.priority=priority
        project.description=description
        //findOne tambien funciona
        await project.save()
        console.log(project)
        res.send('Actualizando proyecto...')
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

    }catch{
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
    }catch{
        return res.status(500).json({message:error.message})

    }

}