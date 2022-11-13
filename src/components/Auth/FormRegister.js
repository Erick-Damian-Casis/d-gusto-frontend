import {useForm} from "react-hook-form";
import {createRegister} from "../../services/AuthService";

export default function FormRegister({handleIsLogin}){
    const { register, handleSubmit, formState:{errors} }=useForm();

    const onSubmit=(data)=>{
        createRegister(data)
            .then(response=>{
                console.log(response)
            })
    }

    return(
        <form className="bg-white  w-96" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-gray-800 font-bold text-5xl mb-14">Registrarse</h1>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="h-5 w-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                </svg>

                <input className="pl-2 outline-none border-none w-auto"
                       type="text"
                       placeholder="Nombre"
                       {...register('name',{
                           required:true
                       })}
                />
            </div>
            {errors.name?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input className="pl-2 outline-none border-none"
                       type="email"
                       placeholder="Correo Electronico"
                       {...register('email',{
                           required:true
                       })}
                />
            </div>
            {errors.email?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input className="pl-2 outline-none border-none"
                       type="password"
                       placeholder="Contraseña"
                       {...register('password')}
                />
            </div>
            {errors.password?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input className="pl-2 outline-none border-none"
                       type="password"
                       placeholder="Confirmar Contraseña"
                       {...register('ConfirmPassword',{
                           required: true
                       })}
                />
            </div>
            {errors.ConfirmPassword?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="h-5 w-5 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>

                <input className="pl-2 outline-none border-none"
                       type="text"
                       placeholder="Número de Whatsapp"
                       {...register('whatsapp',{
                           required:true
                       })}
                />
            </div>
            {errors.whatsapp?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
            <button type="submit" className="block w-full bg-green-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Registrarse</button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer" onClick={handleIsLogin}>Tienes una cuenta?</span>
        </form>
    )
}
