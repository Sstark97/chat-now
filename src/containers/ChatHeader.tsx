import ContactInfo from "@components/ContactInfo"
import { HiDotsVertical } from "react-icons/hi"

/**
 * Este componente es el encargado de mostrar el encabezado del chat
 * @returns component
 * @example <ChatHeader />
 */
const ChatHeader = () => {
    return (
        <div className="w-full lg:w-[72%] flex items-center justify-between px-4 lg:px-10 py-4 lg:bg-primary bg-secondary z-20 fixed">
            <ContactInfo />
            <HiDotsVertical className="text-2xl" />
        </div>
    )
}

export default ChatHeader
