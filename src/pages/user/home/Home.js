import CardFood from "../../../components/card/CardFood";
import FormOrder from "../../../components/card/form-order/FormOrder";
import {useState} from "react";

export default function Home(){
    const [foodId, setFoodId] = useState();
    const [modalForm, setModalForm] =useState(false);

    const handleCatchId =(id)=>{
        setFoodId(id);
        setModalForm(!modalForm)
        console.log(id)
    }

    const handleCloseModal=()=>{
        setModalForm(!modalForm)
    }

    return(<div>
        <CardFood handleCatchId={handleCatchId} ></CardFood>
        {modalForm && <FormOrder foodId={foodId} changeModal={handleCloseModal} ></FormOrder>}
    </div>)
}
