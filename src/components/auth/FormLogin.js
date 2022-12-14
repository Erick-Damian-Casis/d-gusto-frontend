import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import {login} from "../../services/AuthService";
import {setToken} from "../../services/PrivateServices";



export default function FormLogin({handleIsLogin}){
    const {register, formState:{errors}, handleSubmit}=useForm();
    const navigate = useNavigate();


    const onSubmit = (data) =>{
        login(data).then(response=>{
            window.localStorage.setItem('loggedUser', JSON.stringify(response.token))
            setToken(response.token)
            redirect(response.data.role[0])
        }).catch(error=>console.log(error))
    }
    const redirect=(user)=>{
        if(user === 'client'){
            navigate('/home')
        }else{
            navigate('/foods')
        }
    }

    return(
        <form className="bg-white w-96" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-gray-800 font-bold text-5xl mb-4">¡Hola de nuevo!</h1>
            <p className="text-lg font-normal text-gray-600 mb-8 ml-4">Bienvenido</p>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-1 w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input className="pl-2 outline-none border-none"
                       {...register('email',{
                           required: true
                       })}
                       type="email"
                       placeholder="Correo" />
            </div>
            {errors.email?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input className="pl-2 outline-none border-none"
                       {...register('password',{
                           required:true
                       })}
                       type="password"
                       placeholder="Password" />
            </div>
            {errors.password?.type==='required'&&  <p className="text-red-400 text-sm">* Este campo es requerido</p>}
            <button type="submit" className="block w-full bg-green-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Iniciar</button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer" onClick={handleIsLogin}>Registrate</span>
        </form>
    )
}
