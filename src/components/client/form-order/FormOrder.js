import {useForm} from "react-hook-form";
import {createOrder} from "../../../services/PrivateServices";


export default function FormOrder({foodId,closeModal}){


    const {register, handleSubmit}= useForm({
        defaultValues:{
            food: {
                id: foodId,
            },
            amount: 1,
        }
    });

    const onSubmit = (data) =>{
            createOrder(data).then(response=>{
                console.log(response.data)
                closeModal();
                }
            )
    }


    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <form className="flex flex-col bg-white p-6  rounded w-1/3" onSubmit={handleSubmit(onSubmit)}>
                {/*Title*/}
                <h1 className="text-center text-2xl font-bold text-gray-600 mb-5">
                    Realizar Pedido
                </h1>
                <div className="flex justify-between my-5">
                    <label className="text-gray-500 text-lg pr-4 ">Cantidad</label>
                    <input
                        {...register('amount')}
                        type="number"
                        min="1"
                        className="appearance-none px-3 bg-gray-200 outline-none rounded w-14"
                    />
                </div>
                <label className="text-gray-500 text-lg">Especificaciones</label>
                <textarea
                    {...register('spec')}
                    placeholder={"Detalles extras"}
                    className="outline-none my-3 p-3 bg-gray-200"
                />
                <div className="mt-4">
                    <button type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}
