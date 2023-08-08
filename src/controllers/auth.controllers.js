import { User } from "../models/User.js"
import by from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createAccesToken } from "../libs/jwt.js"
import { token } from "morgan"

export const userRegister  = async (req,res)=>{
    const {name,username,email,password}=req.body
    try{
        const passwordHash = await by.hash(password,10)
        const newUser= await User.create({
            name,
            username,
            email,
            password:passwordHash,
        } )
    const token= await createAccesToken({id:newUser.id})
    res.cookie(token)
    }catch(error){
        return res.status(500).json({message:error.message})
    
    }
    res.send('Usuario Creado')
} 


export const userLogin= async (req,res)=>{
    const{email,password}=req.body
    try{
        const userFound= await User.findOne({
            where:{
                email
            }
        }
        )
        if(!userFound) return res.status(400).json({message:'User not found'})
        const passwordMatch=await by.compare(password,userFound.password)
    if(!passwordMatch) return res.status(400).json({message:"Incorrect Password"})
const token = await createAccesToken({id: userFound.id})
res.cookie('token',token)
res.json({
    id:userFound.id
})

    } catch(error){
        res.status(500).json({message:message.error})
    }
}   


export const userLogout=(req,res)=>{
    res.cookie('token','',{
        expires: new Date(0)
    })
    return res.status(200).json({message:'Sección Finalizada'})
}

export const profile = async (req,res)=>{
    const findId=req.user.payload.id
    const userFound= await User.findOne({
        where:{id:findId}
    })
    console.log(userFound)
    if(!userFound) return res.status(404).json({message:'Usuario no encontrado'})
    return res.json({
        id:userFound.id,
        username:userFound.username,
        name: userFound.name
}),
console.log(req.user)
}