import useChatContext from "@hooks/useChatContext"
import { STATE_COLORS } from "@lib/constants/securityPassword"
import Image from "next/image"
import { MdArrowBackIosNew } from "react-icons/md"

/**
 * Este componente es el encargado de mostrar la información del contacto seleccionado
 * @returns component
 * @example <ContactInfo />
 */
const ContactInfo = () => {
    const { selectedChat, handleCloseChat } = useChatContext()
    const { image, name, status } = selectedChat
    
    const color = STATE_COLORS[status as keyof typeof STATE_COLORS]

    const closeChat = () => {
        handleCloseChat()
    }

    return (
        <div className="flex items-center">
            <button onClick={closeChat}>
                <MdArrowBackIosNew className="font-extrabold text-xl lg:hidden mr-3" />
            </button>
            {image ? (
                <Image
                    className="w-[4rem] h-[4rem] rounded-full"
                    src={image}
                    alt={name}
                    width={75}
                    height={75}
                />
            ) : (
                <div className="w-[4rem] h-[4rem] lg:bg-secondary dark:lg:bg-dark_secondary bg-icon dark:bg-dark_icon rounded-full"></div>
            )}
            <div className="flex flex-col ml-5">
                <div className="flex items-center">
                    <p className="text-lg mr-3">{name}</p>
                    <div className={`w-[.8rem] h-[.8rem] bg-${color} rounded-full`}></div>
                </div>
                <p className="text-sm lg:text-sm capitalize opacity-50 mt-1">En línea</p>
            </div>
        </div>
    )
}

export default ContactInfo
