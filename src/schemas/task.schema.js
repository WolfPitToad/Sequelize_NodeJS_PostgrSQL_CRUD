import {z} from 'zod'

export const createTaskSchema = z.object({
    name: z.string({
        required_error: 'Descripción requerida'
    }).min(10,{
        message:'Descripción debe de ser al menos 10 caracteres'
    })
})