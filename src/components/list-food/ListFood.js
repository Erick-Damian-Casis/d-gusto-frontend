import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

export default function ListFood(){
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
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">Salchipapa</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">1.50</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">Disponible</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">Normal</div>
                                    </td>
                                    <td className="text-lg text-center">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 mx-2 text-white font-bold py-1 px-2 border border-blue-500 rounded text-2xl">
                                            <HiOutlinePencilAlt/>

                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 mx-2 text-white font-bold py-1 px-2 border border-red-500 rounded text-2xl">
                                            <HiOutlineTrash/>
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
