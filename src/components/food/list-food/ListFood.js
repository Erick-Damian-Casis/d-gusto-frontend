import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import FormFood from "../form-food/FormFood";
import {useEffect, useState} from "react";
import axios from "axios";
import FormFoodUpdate from "../form-food/FormFoodUpdate";

export default function ListFood(){
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [food,setFood]=useState([]);
    const [currentFood,setCurrentFood]=useState({
    });

    useEffect(()=>{
        getFoods();
    },[])

    const getFoods= () =>{
      axios('http://127.0.0.1:8000/api/v1/private/foods')
          .then(response=>{
              setFood(response.data.data);
          })
    }

    const deleteFood=(id)=>{
        axios.delete('http://127.0.0.1:8000/api/v1/private/foods/'+id)
            .then(response=>{
                    setFood(food.filter(value => value.id!==id))
                    console.log(response)
                }
            ).catch(error => {
            console.log(error);
        });

    }

    const updateFood=(id)=>{
        axios('http://127.0.0.1:8000/api/v1/private/foods/'+id)
            .then(response=>{
                    setCurrentFood(response.data.data);
                }
            )
        setIsOpenEdit(true)
    }

    const closeModal=()=> {
        setIsOpen(false)
    }
    const closeModalUpdate =()=> {
        setIsOpenEdit(false)
    }

    const handleModalForm=()=>{
        setIsOpen(true)
    }

    const pipeState=(state)=>{
        if(state){
            return(
                <div className="text-lg text-center">
                    DISPONIBLE
                </div>
            )
        }else{
            return(
                <div className="text-lg text-center">
                    NO DISPONIBLE
                </div>
            )
        }


    }

    const pipeSpecial=(special)=>{
        if(special){
            return(
                <div className="text-lg text-center">
                    ESPECIAL
                </div>
            )
        }else{
            return(
                <div className="text-lg text-center">
                    FRECUENTE
                </div>
            )
        }


    }

    return(
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
            <div className="flex flex-col p-12 h-full">
                <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <button onClick={handleModalForm}
                        className="bg-blue-200 p-2 mt-4 ml-4 rounded-md hover:bg-blue-300 hover:text-white transition ease-in duration-200"
                    >AGREGAR
                    </button>
                    <div className="p-4">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">COMIDA</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">PRECIO</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">DISPONIBILIDAD</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">TIPO</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">OPCIONES</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                {food.length>0?(
                                    food.map(value=>{
                                            return(
                                                <tr key={value.id}>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-lg text-center">{value.name}</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-lg text-center">{value.cost}</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        {pipeState(value.state)}
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        {pipeSpecial(value.special)}
                                                    </td>
                                                    <td className="text-lg text-center">
                                                        <button
                                                            onClick={()=>updateFood(value.id)}
                                                            className="bg-blue-500 hover:bg-blue-700 mx-2 text-white font-bold py-1 px-2 border border-blue-500 rounded text-2xl">
                                                            <HiOutlinePencilAlt/>

                                                        </button>
                                                        <button
                                                            onClick={()=>deleteFood(value.id)}
                                                            className="bg-red-500 hover:bg-red-700 mx-2 text-white font-bold py-1 px-2 border border-red-500 rounded text-2xl">
                                                            <HiOutlineTrash/>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                ):(
                                        <tr>
                                            <td> No se encontro comidas</td>
                                        </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <FormFood getFoods={getFoods} closeModal={closeModal} isOpen={isOpen} ></FormFood>}
            {isOpenEdit && <FormFoodUpdate getFoods={getFoods} currentFood={currentFood} closeModalUpdate={closeModalUpdate} isOpen={isOpenEdit} ></FormFoodUpdate>}
        </section>
    )
}
