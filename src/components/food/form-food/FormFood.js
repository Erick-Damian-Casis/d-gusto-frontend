import {useForm} from "react-hook-form";
import { Dialog, Transition} from "@headlessui/react";
import { Fragment } from 'react'
import axios from "axios";

export default function FormFood({closeModal,isOpen,getFoods}){

    const {register ,formState:{errors} ,handleSubmit}= useForm({});

    const onSubmit= (data) =>{
        console.log(data)
        const formData = new FormData();

        formData.append('name', data.name)
        formData.append('cost', data.cost)
        formData.append('state', data.state)
        formData.append('special', data.special)
        formData.append('image', data.image[0])

        axios.post('http://127.0.0.1:8000/api/v1/private/foods',formData)
            .then(response => {
                console.log(response.data)
                getFoods();
        })
            .catch(error => {
                console.log(error);
            });
        closeModal();
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
                                                       <span
                                                           className="ml-3 text-lg
                                                           text-gray-500">Disponible</span>
                                               </label>
                                           </div>
                                            <div>
                                                <label htmlFor="special"
                                                       className="inline-flex relative items-center cursor-pointer">
                                                    <input type="checkbox"
                                                           {...register('special')}
                                                           id="special"
                                                           className="sr-only peer"
                                                    />
                                                    <div
                                                        className="w-11 h-6 bg-gray-200 appearance-none rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                    <span
                                                        className="ml-3 text-lg
                                                           text-gray-500">Especial</span>
                                                </label>
                                            </div>
                                        </div>
                                        <input type="file"
                                               className="pt-5"
                                               {...register('image')}
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
