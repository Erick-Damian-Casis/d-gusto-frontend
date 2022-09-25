import {useForm} from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";


export default function FormOrder({foodId, changeModal}){

    const {register, handleSubmit}= useForm({
        defaultValues:{
            food: {
                id: foodId,
            },
            amount: 1,
        }
    });

    const onSubmit = (data) =>{
            fetch('http://127.0.0.1:8000/api/v1/private/orders',{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                }
            }).then(response=>response.json())
                .then(console.log)
                .catch(error=>console.log(error))
            changeModal();
    }


    return(
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        className="p-10 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="flex justify-between mb-6">
                            <h1 className="">PEDIDO</h1>
                            <button className="" onClick={changeModal}><AiOutlineClose/></button>
                        </div>
                        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex justify-between my-5">
                                        <label className="text-gray-500 text-lg pr-4 ">Cantidad</label>
                                        <input
                                            {...register('amount')}
                                            type="number"
                                            min="1"
                                            className="px-3 bg-gray-200 outline-none rounded w-14"
                                        />
                                    </div>
                                    <label className="text-gray-500 text-lg">Especificaciones</label>
                                    <textarea
                                        {...register('spec')}
                                        placeholder={"Detalles extras"}
                                        className="outline-none my-3 p-3 bg-gray-200"
                                    />
                                    <button type="submit"
                                            className="rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
                                    >Enviar
                                    </button>
                                </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
