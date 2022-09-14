import {useParams} from "react-router-dom";
export default function FormOrder(){
    const {id}=useParams();

    return(
        <div className="w-full h-full fixed top-0 left-0 bg-opacity-20 bg-black justify-center items-center flex ">
            <div className="w-1/4 h-auto bg-white p-14 rounded">
                <h1 className="text-center text-xl pb-10">Pedido</h1>
                <form className="flex flex-col">
                    <div className="flex justify-between my-5">
                        <label className="text-gray-500 text-lg pr-4 ">Cantidad</label>
                        <input className="px-3 bg-gray-200  outline-none rounded w-14" type="number"/>
                    </div>
                    <label className="text-gray-500 text-lg">Especificaciones</label>
                    <textarea className="outline-none my-3 p-3 bg-gray-200"/>
                    <button
                        className="mt-6 px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">
                        ENVIAR
                    </button>
                </form>
            </div>
        </div>
    );
}
