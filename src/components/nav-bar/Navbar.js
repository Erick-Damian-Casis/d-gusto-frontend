import logo from "../../assets/logo.png";
import {useNavigate} from "react-router-dom";
import {logout} from "../../services/PrivateServices";

export default function NavBar(){
    const navigate = useNavigate()
    const handleLogout=()=>{
        window.localStorage.removeItem('loggedUser')
        navigate('/')
        logout().then(response=>{
            console.log(response)
        })

    }

    return(
        <div>
            <nav className="flex w-auto px-5 py-3 bg-green-500 relative flex items-center justify-between">
                <img src={logo} alt="" className="h-9"/>
                <button onClick={handleLogout}
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                >Logout
                </button>
            </nav>
        </div>
    )
}
