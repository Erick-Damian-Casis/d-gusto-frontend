import login from "../../assets/login.jpg"

// Components
import FormLogin from "../../components/Auth/FormLogin";
import FormRegister from "../../components/Auth/FormRegister";

import {useState} from "react";
export default function Login(){
    const [isLogin, setIsLogin]=useState(true);

    const handleIsLogin=()=>{
        setIsLogin(!isLogin);
    }

    return(
        <div className="h-screen flex">
            <div className="flex w-1/2 justify-around items-center">
                <img src={login} className="h-full w-full object-cover object-center lg:h-full lg:w-full" alt=""/>
            </div>
            <div className="flex w-1/2 justify-center items-center bg-white">
                { isLogin === true ? <FormLogin handleIsLogin={handleIsLogin}/> : <FormRegister handleIsLogin={handleIsLogin}/> }
            </div>
        </div>)
}
