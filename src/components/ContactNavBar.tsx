import Link from "next/link"
import { MdArrowBackIosNew } from "react-icons/md"
import Image from "next/image"
import useChatContext from "@hooks/useChatContext"

/**
 * Este componente es el encargado de mostrar la información del contacto seleccionado
 * @returns component
 * @example <ContactInfo />
 */
const ContactNavBar = () => {
    const { ref, selectedChat } = useChatContext()

    return (
        <>
            <nav
                className="w-full bg-secondary dark:bg-dark_secondary flex justify-evenly lg:items-center lg:justify-between py-8"
                ref={ref}
            >
                <Link className="absolute top-7 left-0" href="/contacts">
                    <MdArrowBackIosNew className="ml-6 font-extrabold text-xl" />
                </Link>

                <div className="w-full flex justify-center items-center flex-col">
                    {selectedChat.image ? (
                        <Image
                            className="w-[8rem] h-[8rem] rounded-full"
                            src={selectedChat.image}
                            alt="user"
                            width={75}
                            height={75}
                        />
                    ) : (
                        <div className="w-[8rem] h-[8rem] lg:bg-icon dark:lg:bg-dark_icon bg-secondary dark:bg-dark_secondary rounded-full"></div>
                    )}
                    <p className="text-center text-2xl mt-5">{selectedChat.name}</p>
                    <p className="opacity-50 mt-3">En línea</p>
                </div>
            </nav>
        </>
    )
}

export default ContactNavBar
