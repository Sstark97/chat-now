import { ChangeEvent, Fragment, useState } from "react"
import { BsSun } from "react-icons/bs"
import { Dialog, Transition } from "@headlessui/react"
import { AiOutlineClose } from "react-icons/ai"

const ThemeModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    const switchTheme = (e: ChangeEvent<HTMLInputElement>) => {
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
        <>
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
                        <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-25" />
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
                                        Elige un tema
                                    </Dialog.Title>

                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="light"
                                            className="flex items-center cursor-pointer mr-2 mb-3"
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
                                            <div
                                                className={`block border-2 border-icon dark:border-dark_icon w-4 h-4 rounded-full ${
                                                    theme === "light" &&
                                                    "bg-light_purple dark:bg-dark_purple"
                                                }`}
                                            ></div>
                                            <span className="ml-2">Claro</span>
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
                                            <div
                                                className={`block border-2 border-icon dark:border-dark_icon w-4 h-4 rounded-full ${
                                                    theme === "dark" &&
                                                    "bg-light_purple dark:bg-dark_purple"
                                                }`}
                                            ></div>
                                            <span className="ml-2">Oscuro</span>
                                        </label>
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

export default ThemeModal
