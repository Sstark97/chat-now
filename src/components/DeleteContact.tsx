import { ChangeEvent, Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Error from "@components/Error"
import useChatContext from "@hooks/useChatContext"
import useDeleteContact from "@hooks/useDeleteContact"
import { AiOutlineClose } from "react-icons/ai"

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
                        <div className="fixed inset-0 bg-black dark:bg-white bg-opacity-25" />
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-black p-6 text-left align-middle shadow-xl transition-all">
                                    <form className="absolute top-4 right-4">
                                        <button
                                            type="button"
                                            onClick={handleCancel}
                                            className="text-2xl"
                                        >
                                            <AiOutlineClose />
                                        </button>
                                    </form>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-medium text-black dark:text-white mb-4"
                                    >
                                        Eliminar contacto
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm">
                                            {`¿Está seguro de que desea eliminar a ${selectedChat.name}?`}
                                        </p>
                                    </div>

                                    <form className="flex flex-col mt-4">
                                        {error ? (
                                            <Error className="mb-2 text-center" message={error} />
                                        ) : (
                                            <></>
                                        )}
                                        <p className="text-sm mb-2">
                                            Escribe tu email para confirmar.
                                        </p>
                                        <input
                                            className="border-0 p-3 bg-secondary dark:bg-dark_secondary rounded-xl text-white dark:text-black placeholder-white dark:placeholder-black"
                                            type="email"
                                            placeholder="Escribe tu email"
                                            value={email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="w-10/12 mx-auto flex justify-around items-center mt-7">
                                            <button
                                                type="button"
                                                className="w-2/5 inline-flex justify-center rounded-xl border-0 bg-secondary dark:bg-dark_secondary py-2 text-lg text-black dark:text-white"
                                                onClick={handleCancel}
                                            >
                                                Cancelar
                                            </button>
                                            <button
                                                type="button"
                                                className="w-2/5 inline-flex justify-center rounded-xl border border-transparent bg-light_purple dark:bg-dark_purple py-2 text-lg text-black dark:text-white"
                                                onClick={closeModal}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </form>
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
