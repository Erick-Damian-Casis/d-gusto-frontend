import ListFood from "../../../components/list-food/ListFood";
import {useEffect, useState} from "react";

export default function Food(){
    const [food,setFood]=useState([]);

    useEffect(()=>{
        getFoods().catch(error=>console.log(error));
    },[])

    const getFoods= async () =>{
        const response = await fetch('http://127.0.0.1:8000/api/v1/private/foods')
        const data = await response.json();
        console.log(data.data)
        setFood(data.data);
    }
    return(
        <div>
            <ListFood food={food}></ListFood>
        </div>
    );
}
