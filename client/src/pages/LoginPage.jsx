import{useForm} from 'react-hook-form'
function LoginPage(){
    const{register,handleSubmit}=useForm()
    return(
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <form >
                <input type='text' {...register('email',{required:true})}
                                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                                    placeholder="email"
                                    />
                <input type='text'{...register('password',{required:true})}
                                      className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                                      placeholder="password"/>
                                      
            </form>
    </div>
    )
}

export default LoginPage