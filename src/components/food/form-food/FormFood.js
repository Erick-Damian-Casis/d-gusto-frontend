import {useForm} from "react-hook-form";
import { Dialog, Transition} from "@headlessui/react";
import { Fragment } from 'react'

export default function FormFood({closeModal,isOpen}){
    const {register ,formState:{errors} ,watch ,handleSubmit}= useForm({
        defaultValues:{
            state:false,
            special:false,
        }
    });
    const onSubmit=(data)=>{
        fetch('http://127.0.0.1:8000/api/v1/private/foods',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        }).then(response=>response.json())
            .then(console.log)
            .catch(error=>console.log(error));
    }


    return(
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Nuevo Platillo
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form className="flex flex-col m-4" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                                        <label className="text-gray-500 text-lg pt-3 ">Nombre</label>
                                        <input
                                            placeholder="ej. Hamburguesa"
                                            {...register('name',{
                                                required: true
                                            })}
                                            className="appearance-none p-2 outline-none rounded-md border-2 border-b-gray-500 border-white"
                                            type="text"/>
                                        {errors.name?.type==="required" && <p className="text-red-400 text-sm">* El nombre es requerido</p>}
                                        <label className="text-gray-500 text-lg pt-3 ">Precio</label>
                                        <input
                                            {...register('cost',{
                                                required: true
                                            })}
                                            placeholder="0.00"
                                            className="appearance-none p-2 outline-none rounded-md border-2 border-b-gray-500 border-white"
                                            type="number"/>
                                        {errors.cost?.type==="required"&& <p  className="text-red-400 text-sm">* El precio de la comida es requerida</p>}
                                        {/*<label className="text-gray-500 text-lg pt-3 ">Disponible</label>*/}
                                        {/*<input*/}
                                        {/*    {...register('state')}*/}
                                        {/*    className="appearance-none p-2 outline-none rounded-md border-2 border-b-blue-500 border-white"*/}
                                        {/*    type="text"/>*/}
                                        {/*<label className="text-gray-500 text-lg pt-3 ">Especial</label>*/}
                                        {/*<input*/}
                                        {/*    {...register('special')}*/}
                                        {/*    className="appearance-none p-2 outline-none rounded-md border-2 border-b-blue-500 border-white"*/}
                                        {/*    type="text"/>*/}
                                        <input type="file"
                                               className="pt-5"
                                               {...register('url')}
                                        />
                                        <div className="mt-6">
                                            <button type="submit"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >Crear
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
