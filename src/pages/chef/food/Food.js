import ListFood from "../../../components/chef/food/list-food/ListFood";
import {useEffect} from "react";
import {setToken} from "../../../services/PrivateServices";
import NavBarChef from "../../../components/nav-bar/NavBarChef";

export default function Food(){
    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        const token = JSON.parse(loggedUser)
        setToken(token)
    },[])
    return(
        <div>
            <NavBarChef></NavBarChef>
            <ListFood></ListFood>
        </div>
    );
}
