import CardFood from "../../../components/client/card/CardFood";
import FormOrder from "../../../components/client/form-order/FormOrder";
import {useState,useEffect} from "react";
import NavBar from "../../../components/nav-bar/Navbar";
import {setToken} from "../../../services/PrivateServices";

export default function Home(){

    const [foodId, setFoodId] = useState();
    const [modalOrder, setModalOrder] = useState(false)

    useEffect(()=>{
        const loggedUser = window.localStorage?.getItem('loggedUser')
        const token = JSON.parse(loggedUser)
        setToken(token)
    },[])


    function handleModal() {
        setModalOrder(!modalOrder)
    }

    const handleCatchId =(id)=>{
        setFoodId(id);
        setModalOrder(!modalOrder)
        console.log(id)
    }

    return(<div>
        <NavBar></NavBar>
        <CardFood handleCatchId={handleCatchId}/>
        {modalOrder && <FormOrder foodId={foodId} closeModal={handleModal} />}
    </div>)
}
