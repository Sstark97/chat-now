import { ChangeEvent, Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Error from "@components/Error"
import { AiOutlineClose } from "react-icons/ai"
import type { DeleteModalProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar el modal para eliminar un contacto
 * @param {DeleteModalProps} { name, title, error, handleDelete, cleanError }
 * - name: Nombre del contacto
 * - title: Título del modal
 * - error: Error al eliminar el contacto
 * - handleDelete: Función para eliminar el contacto
 * - cleanError: Función para limpiar el error
 * @returns component
 * @example <DeleteModal />
 */
const DeleteModal = ({ name, title, error, handleDelete, cleanError }: DeleteModalProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState("")
    const deleteMessage = name ? ` a ${name}` : "la cuenta"

    /**
     * Esta función se encarga de actualizar el valor del input
     * @returns void
     * @example <input onChange={handleChange} />
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    /**
     * Esta función se encarga de cerrar el modal
     * @returns void
     * @example <button onClick={closeModal} />
     */
    const closeModal = () => {
        handleDelete(email)
    }

    /**
     * Esta función se encarga de cerrar el modal
     * @returns void
     * @example <button onClick={closeModal} />
     */
    const handleCancel = () => {
        cleanError()
        setEmail("")
        setIsOpen(false)
    }

    /**
     * Esta función se encarga de abrir el modal
     * @returns void
     * @example <button onClick={openModal} />
     */
    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="flex items-center justify-center">
                <button type="button" onClick={openModal} className="italic text-center mt-4">
                    Eliminar {title.toLowerCase()}
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-primary dark:bg-dark_primary p-6 text-left align-middle shadow-xl transition-all">
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
                                        Eliminar {title}
                                    </Dialog.Title>
                                    {error ? (
                                        <Error className="mb-1 text-center" message={error} />
                                    ) : (
                                        <></>
                                    )}
                                    <div className="mt-2">
                                        <p className="text-sm">
                                            {`¿Está seguro de que desea eliminar ${deleteMessage}?`}
                                        </p>
                                    </div>

                                    <form className="flex flex-col mt-4">
                                        <p className="text-sm mb-2">
                                            Escribe tu email para confirmar.
                                        </p>
                                        <input
                                            className="border-0 p-3 bg-secondary dark:bg-dark_secondary rounded-xl text-white placeholder-white"
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
export default DeleteModal
