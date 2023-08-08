import {z}from 'zod'

export const registerSchema= z.object({
    name:z.string({
        required_error: 'Nombre requerido',
    }),
    username: z.string({
        required_error: 'Nombre de usuario requerido',
    }).min(6,{
        message: 'El usuername debe ser de al menos 6 caracteres',
    }),
    email:z.string({
        required_error: 'Email requerido',
    }).email({
        message: 'Email invalido',
    }),
    password:z.string({
        required_error: 'Contraseña requerida',
    }).min(6,{
       message: 'La contraseña debe ser de al menos 6 caracteres',
    })

})

export const loginSchema=z.object({
    email:z.string({
        required_error: 'Email requerido'
    }).email({
        message: 'Email invalido'
    }),
    password:z.string({
        required_error: 'Contraseña requerida'
    }).min(4,{
        message:'La contraseña debe ser de al menos 6 caracteres'
    })
})