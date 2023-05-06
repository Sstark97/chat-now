import Image from "next/image"
import { AiOutlineClose, AiOutlineEye } from "react-icons/ai"
import { BsSun } from "react-icons/bs"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { MdWallpaper } from "react-icons/md"
import { BiExit, BiHelpCircle } from "react-icons/bi"
import { useSession } from "next-auth/react"
import { Dialog, Transition } from "@headlessui/react"
import Link from "next/link"
import { useState, Fragment } from "react"

const SettingsContainer = () => {
    const { data: session } = useSession()
    const userImage = session?.user?.image
    const userName = session?.user?.name

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    function switchTheme(e) {
        const newTheme = e.target.value
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        const html = document.querySelector("html")

        if (newTheme === "dark") {
            html?.classList.add("dark")
            html?.classList.remove("light")
        }
        if (newTheme === "light") {
            html?.classList.add("light")
            html?.classList.remove("dark")
        }
    }

    return (
        <div className="w-full p-7 px-8">
            <section className="flex items-center">
                {userImage ? (
                    <Image
                        className="w-[3rem] h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-full"
                        src={userImage}
                        alt="imgUser"
                        width={75}
                        height={75}
                    />
                ) : (
                    <div className="w-[3rem] h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] bg-secondary dark:bg-dark_secondary lg:bg-icon dark:lg:bg-dark_icon rounded-full"></div>
                )}
                <p className="pl-3 text-sm lg:text-base">{userName}</p>
            </section>

            <section className="w-full pl-2 pt-8">
                <div className="w-full flex items-center mb-5">
                    <AiOutlineEye className="pb-2 mr-3 text-2xl lg:text-3xl" />
                    <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base">
                        Estado
                    </p>
                </div>

                {/* Aqui */}
                <button className="w-full flex items-center mb-5" type="button" onClick={openModal}>
                    <BsSun className="pb-2 mr-3 text-2xl lg:text-3xl" />
                    <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base text-left">
                        Tema
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
                                            className="text-2xl font-medium text-black dark:text-white  mb-4"
                                        >
                                            Elige un tema
                                        </Dialog.Title>

                                        <div className="flex items-center">
                                            <span className="text-gray-600 mr-2">Modo:</span>
                                            <label
                                                htmlFor="light"
                                                className="flex items-center cursor-pointer mr-2"
                                            >
                                                <input
                                                    type="radio"
                                                    id="light"
                                                    name="theme"
                                                    value="light"
                                                    checked={theme === "light"}
                                                    onChange={switchTheme}
                                                    className="sr-only"
                                                />
                                                <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
                                                <span className="text-gray-600 ml-2">Claro</span>
                                            </label>
                                            <label
                                                htmlFor="dark"
                                                className="flex items-center cursor-pointer"
                                            >
                                                <input
                                                    type="radio"
                                                    id="dark"
                                                    name="theme"
                                                    value="dark"
                                                    checked={theme === "dark"}
                                                    onChange={switchTheme}
                                                    className="sr-only"
                                                />
                                                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                                                <span className="text-gray-600 ml-2">Oscuro</span>
                                            </label>
                                        </div>

                                        <form className="flex flex-col mt-4">
                                            <div className="w-10/12 mx-auto flex justify-around items-center mt-7">
                                                <button
                                                    type="button"
                                                    className="w-2/5 inline-flex justify-center rounded-xl border-0 bg-secondary dark:bg-dark_secondary py-2 text-lg text-black dark:text-white"
                                                    onClick={closeModal}
                                                >
                                                    Cancelar
                                                </button>
                                                <button
                                                    type="button"
                                                    className="w-2/5 inline-flex justify-center rounded-xl border border-transparent bg-light_purple dark:bg-dark_purple py-2 text-lg text-black dark:text-white"
                                                    onClick={closeModal}
                                                >
                                                    Cambiar
                                                </button>
                                            </div>
                                        </form>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>

                <div className="w-full flex items-center mb-5">
                    <MdWallpaper className="pb-2 mr-3 text-2xl lg:text-3xl" />
                    <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base">
                        Fondo de pantalla del chat
                    </p>
                </div>

                <Link href="/settings/account">
                    <div className="w-full flex items-center mb-5">
                        <HiOutlineInformationCircle className="pb-2 mr-3 text-2xl lg:text-3xl" />
                        <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base">
                            Información de mi cuenta
                        </p>
                    </div>
                </Link>

                <Link href="/settings/help">
                    <div className="w-full flex items-center mb-5">
                        <BiHelpCircle className="pb-2 mr-3 text-2xl lg:text-3xl" />
                        <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base">
                            Ayuda
                        </p>
                    </div>
                </Link>

                <div className="w-full flex items-center mb-5">
                    <BiExit className="pb-2 mr-3 text-2xl lg:text-3xl" />
                    <p className="w-11/12 pb-2 border-b-[.05rem] border-black text-sm lg:text-base">
                        Cerrar sesión
                    </p>
                </div>
            </section>
        </div>
    )
}

export default SettingsContainer
