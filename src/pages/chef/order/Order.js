import ListOrder from "../../../components/chef/list-order/ListOrder";
import {useEffect, useState} from "react";
import {setToken} from "../../../services/PrivateServices";
import NavBarChef from "../../../components/nav-bar/NavBarChef";

export default function Order(){

    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        const token = JSON.parse(loggedUser)
        setToken(token)
    },[])


    return(
        <div>
            <NavBarChef></NavBarChef>
            <ListOrder></ListOrder>
        </div>
    );
}
