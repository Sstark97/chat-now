import { ChangeEvent, Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Error from "@components/Error"
import useChatContext from "@hooks/useChatContext"
import useDeleteContact from "@hooks/useDeleteContact"

/**
 * Formulario para eliminar un contacto
 * @component DeleteContact
 * @example
 * <DeleteContact />
 */
const DeleteContact = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState("")
    const { selectedChat } = useChatContext()
    const { handleDelete, cleanError, error } = useDeleteContact(setIsOpen)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const closeModal = () => {
        handleDelete(email)
    }

    const handleCancel = () => {
        cleanError()
        setEmail("")
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <button type="button" onClick={openModal} className="italic text-center mt-4">
                    Eliminar contacto
                </button>
            </div>

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
                                        Eliminar contacto
                                    </Dialog.Title>
                                    {error ? (
                                        <Error className="mt-5 text-center" message={error} />
                                    ) : (
                                        <></>
                                    )}
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            {`¿Está seguro que desea eliminar a ${selectedChat.name}?`}
                                            Escriba su email para confirmar.
                                        </p>
                                    </div>

                                    <form className="flex flex-col mt-4">
                                        <input
                                            className="border-2"
                                            type="email"
                                            placeholder="Escriba su email..."
                                            value={email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Eliminar
                                        </button>
                                    </form>
                                    <button onClick={handleCancel}>Cancelar</button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default DeleteContact
