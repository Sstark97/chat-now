import ContactInfo from "@components/ContactInfo"
import Link from "next/link"
import { MdModeEditOutline } from "react-icons/md"

/**
 * Este componente es el encargado de mostrar el encabezado del chat
 * @returns component
 * @example <ChatHeader />
 */
const ChatHeader = () => {
    return (
        <div className="w-full lg:w-[72%] flex items-center justify-between px-4 lg:px-10 py-4 lg:bg-primary dark:lg:bg-dark_primary bg-secondary dark:bg-dark_secondary z-20 fixed">
            <ContactInfo />
            <Link href="/contacts/modify">
                <MdModeEditOutline className="text-2xl" />
            </Link>
        </div>
    )
}

export default ChatHeader
