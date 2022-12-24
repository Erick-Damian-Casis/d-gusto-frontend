import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import FormFood from "../form-food/FormFood";
import {destroyFood, getFoods} from "../../../../services/PrivateServices";
import {useState, useEffect} from "react";
import notResult from '../../../../assets/hamburguesa.png'
import TableFood from "../TableFood";
import NotResult from "../../../NotResult";

const API_URL = 'http://127.0.0.1:8000/api/v1/private/foods';


export default function ListFood(){
    const [isOpen, setIsOpen] = useState(false)

    const [foods, setFood] = useState([]);

    useEffect( ()=>{
        getFoods().then(response=>{
            setFood(response.data)
            }
        )
    },[])


    const addFood =(food)=>{
        setFood([...foods, food])
    }

    const deleteFood=(id)=>{
        destroyFood(id)
            .then(response=>{
                setFood(foods.filter(food => food.id !== id))
            }
        )
    }

    const handleModalForm=()=>{
        setIsOpen(!isOpen)
    }

    const pipeState=(state)=>{
        if(state){
            return(
                <div className="text-lg text-center">Disponible</div>
            )
        }else{
            return(
                <div className="text-lg text-center">No Disponible</div>
            )
        }
    }
    const pipeSpecial=(special)=>{
        if(special){
            return(
                <div className="text-lg text-center">Especial</div>
            )
        }else{
            return(
                <div className="text-lg text-center">Nomal</div>
            )
        }
    }

    return(
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
            <div className="flex flex-col p-12 h-full">
                <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <button onClick={()=>handleModalForm()}
                        className="bg-blue-200 p-2 mt-4 ml-4 rounded-md hover:bg-blue-300 hover:text-white transition ease-in duration-200"
                    >AGREGAR
                    </button>
                    <div className="p-4">
                        <div className="overflow-x-auto">
                            {foods.length>0
                                ?<TableFood deleteFood={deleteFood} foods={foods} />
                                :<NotResult/>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <FormFood addFood={addFood} closeModal={handleModalForm}></FormFood>}
        </section>
    )
}
