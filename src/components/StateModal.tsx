import { ChangeEvent, Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { AiOutlineClose, AiOutlineEye } from "react-icons/ai"
import { useSession } from "next-auth/react"
import { STATE_VALUES_ARRAY } from "@lib/constants/settings"
import { changeFrom } from "@lib/utils/fetcher"
import { API } from "@lib/constants/links"

const StateModal = () => {
    const { data: session, update } = useSession()
    const userStatus = session?.user?.status as string
    const [state, setState] = useState(userStatus)
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = async () => {
        if (state !== userStatus) {
            const userFromApi = await changeFrom({ status: state }, API.CHANGE_STATUS, "PUT")

            await update({
                ...session,
                user: {
                    ...session?.user,
                    status: userFromApi.status,
                },
            })
        }
        setIsOpen(false)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }

    return (
        <>
            <button className="w-full flex items-center mb-5" type="button" onClick={openModal}>
                <AiOutlineEye className="pb-2 mr-3 text-2xl lg:text-3xl" />
                <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base text-left">
                    Estado
                </p>
            </button>

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
                                            onClick={closeModal}
                                            className="text-2xl"
                                        >
                                            <AiOutlineClose />
                                        </button>
                                    </form>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-medium text-black dark:text-white mb-5"
                                    >
                                        Elige un Estado
                                    </Dialog.Title>

                                    <div className="flex flex-col">
                                        {STATE_VALUES_ARRAY.map(({ value, label }) => (
                                            <label
                                                key={value}
                                                htmlFor={value}
                                                className="flex items-center cursor-pointer mr-2 mb-3"
                                            >
                                                <input
                                                    type="radio"
                                                    id={value}
                                                    name="theme"
                                                    value={value}
                                                    checked={state === value}
                                                    onChange={handleChange}
                                                    className="sr-only"
                                                />
                                                <div
                                                    className={`block border-2 border-icon dark:border-dark_icon w-4 h-4 rounded-full ${
                                                        state === value &&
                                                        "bg-light_purple dark:bg-dark_purple"
                                                    }`}
                                                ></div>
                                                <span className="ml-2">{label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default StateModal
