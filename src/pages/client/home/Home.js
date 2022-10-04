import CardFood from "../../../components/card/CardFood";
import FormOrder from "../../../components/order/form-order/FormOrder";
import {useState} from "react";

export default function Home(){
    const [foodId, setFoodId] = useState();
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    const handleCatchId =(id)=>{
        setFoodId(id);
        setIsOpen(true)
        console.log(id)
    }

    return(<div>
        <CardFood handleCatchId={handleCatchId} ></CardFood>
        {isOpen && <FormOrder foodId={foodId} closeModal={closeModal} isOpen={isOpen} ></FormOrder>}
    </div>)
}
