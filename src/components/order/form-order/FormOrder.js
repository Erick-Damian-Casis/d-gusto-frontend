import {useForm} from "react-hook-form";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'


export default function FormOrder({foodId,closeModal, isOpen}){


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
                .catch(error=>console.log(error));
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
                                Realizar Pedido
                            </Dialog.Title>
                            <div className="mt-2">
                                <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
    );
}
