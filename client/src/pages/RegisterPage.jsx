import {useForm} from "react-hook-form";
import { registerRequest } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function RegisterPage(){
    const{register,handleSubmit,formState:{errors}}= useForm()
    const{signup,isAuthenticated,errors:registerErrors}=useAuth()
    const navigate = useNavigate()
    useEffect(()=>{
        if(isAuthenticated) navigate('/tasks')
    },[isAuthenticated])
    return(
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            {
                registerErrors.map((error,i)=>(
                    <div className= 'bg-red-500 p-2 text-white'>
                        {error}
                        </div>
                ))
            }
            
            <form onSubmit={handleSubmit(async(values)=>{
                console.log(values)
                const res = await registerRequest(values)
                console.log(res)
                signup(values)
            })}>
                <input type="text" {...register("name",{required:true})}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="name"
                    />
                    {
                        errors.name && <p className='text-red-500'> Nombre es requerido </p>
                    }
                <input type="text" {...register("username",{required:true})}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="username"/>
                                        {
                        errors.username && <p className='text-red-500'> Usuario es requerido </p>
                    }
                <input type="email" {...register("email",{required:true})}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="email"/>
                                        {
                        errors.email && <p className='text-red-500'> El email es requerido </p>
                    }
                <input type="password" {...register("password",{required:true})}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="password"
                />
                                    {
                        errors.password && <p className='text-red-500'> Contraseña es requerida </p>
                    }
                    
                <button type="submit">
                    Registrar
                </button>
            </form>


        </div>

    )
}

export default RegisterPage