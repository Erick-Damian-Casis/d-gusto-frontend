import {useEffect, useState} from "react";
import axios from "axios";
import {getOrders} from "../../../services/PrivateServices";


export default function ListOrder(){

    const [orders, setOrders] = useState([])

    useEffect(()=>{
        getOrders().then(response=>{
            setOrders(response.data)
            console.log(response.data)
        })


    },[])


    return(
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
            <div className="flex flex-col p-12 h-full">
                <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <div className="p-4">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">NOMBRE</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">TELEFONO</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">PEDIDO</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">CANTIDAD</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                {orders.length>0?(orders.map(value => {
                                    return(
                                        <tr key={value.id}>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">{value.user?.name}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">{value.user?.whatsapp}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">{value.food?.name}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">{value.amount}</div>
                                            </td>
                                        </tr>
                                    )
                                })):(
                                    <tr>
                                        <td> No se encontro ordenes</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
