import {useEffect, useState} from "react";
import axios from "axios";


export default function ListOrder(){

    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        getOrders();
    },[])

    const getOrders= () =>{
        axios('http://127.0.0.1:8000/api/v1/private/orders')
            .then(response=>{
                setOrders(response.data.data)
                console.log(response.data.data)
            }).catch(error=>{
                console.log(error)
        })
    }

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
                                        <div className="font-semibold text-left">NOMBRE</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">PEDIDO</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">FECHA</div>
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
                                            <td className="p-5 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img
                                                        className="rounded-full"
                                                        src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                        width="40" height="40" alt="Alex Shatov"/></div>
                                                    <div className="text-lg">Alex Shatov</div>
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">{value?.food?.name}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">{value.orderAt}</div>
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
