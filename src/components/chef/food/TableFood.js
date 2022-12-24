import {HiOutlinePencilAlt, HiOutlineTrash} from "react-icons/hi";

export default function TableFood({foods, deleteFood}){



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
            {foods.length > 0 ? (
                foods?.map(value=>{
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
                                    onClick={()=>console.log(value.id)}
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
                <div className=''>

                </div>
            )}
            </tbody>
        </table>
    )
}
