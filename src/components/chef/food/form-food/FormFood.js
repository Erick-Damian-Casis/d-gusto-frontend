import {useForm} from "react-hook-form";
import {createFoods} from "../../../../services/PrivateServices";
import { BsFillCloudArrowUpFill } from "react-icons/bs";


export default function FormFood({closeModal,addFood}){

    const {register ,formState:{errors} ,handleSubmit}= useForm({});

    const onSubmit= (data) =>{
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('cost', data.cost);
        formData.append('state', data.state);
        formData.append('special', data.special);
        formData.append('image', data.image[0]);
        createFoods(formData)
            .then(
                closeModal(),
                addFood(data),
            );
    }


    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <form className="flex flex-col bg-white p-6  rounded w-1/3" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                {/*Title*/}
                <h1 className="text-center text-2xl font-bold text-gray-600 mb-5">
                    Crear Comida
                </h1>
                {/*Form*/}
                <input
                    placeholder='Nombre'
                    {...register('name',{
                        required: true
                    })}
                    className="appearance-none p-2 outline-none rounded-md border-2 border-b-gray-500 border-white"
                    type="text"/>
                {errors.name?.type==="required" && <p className="text-red-400 text-sm">* El nombre es requerido</p>}

                <input
                    placeholder="Precio"
                    {...register('cost',{
                        required: true
                    })}
                    className="appearance-none p-2 outline-none rounded-md border-2 border-b-gray-500 border-white"
                    type="decimal"/>
                {errors.cost?.type==="required"&& <p  className="text-red-400 text-sm">* El precio de la comida es requerida</p>}
                <div className="grid grid-cols-2 pt-5">
                    <div>
                        <label htmlFor="state"
                               className=" inline-flex relative items-center cursor-pointer">
                            <input type="checkbox"
                                   {...register('state')}
                                   id="state"
                                   className="sr-only peer"
                            />
                            <div
                                className="w-11 h-6 bg-gray-200 appearance-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-lg text-gray-500">
                                Disponible
                            </span>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="special" className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox"
                                   {...register('special')}
                                   id="special"
                                   className="sr-only peer"
                            />
                            <div
                                className="w-11 h-6 bg-gray-200 appearance-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-lg text-gray-500">
                                Especial
                            </span>
                        </label>
                    </div>
                </div>

                <div className="flex w-auto m-6 items-center justify-center bg-grey-lighter">
                    <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-200">
                        <BsFillCloudArrowUpFill/>
                        <span className="mt-2 text-sm leading-normal">Select a file</span>
                        <input type='file'
                               className="hidden"
                               {...register('image')}
                        />
                    </label>
                </div>
                {/*<input type="file"*/}
                {/*       className="pt-5"*/}
                {/*       */}
                {/*/>*/}
                <div className="mt-6">
                    <button type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >Crear
                    </button>
                    <button onClick={()=>closeModal()}
                            className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >Cancelar
                    </button>
                </div>
            </form>
        </div>
    )
}

