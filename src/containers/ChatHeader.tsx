import ContactInfo from "@components/ContactInfo"
import Link from "next/link"
import { HiDotsVertical } from "react-icons/hi"
import useChatContext from "@hooks/useChatContext"

/**
 * Este componente es el encargado de mostrar el encabezado del chat
 * @returns component
 * @example <ChatHeader />
 */
const ChatHeader = () => {
    const { selectedChat } = useChatContext()
    const { contacts: friendships } = useChatContext()

    const isFriend = friendships.some((friendship) => {
        if (friendship.email !== selectedChat.email) {
            console.log(friendship.email)
            console.log(selectedChat.name)
            return false
        } else {
            return true
        }
    })

    return (
        <div className="w-full lg:w-[72%] flex items-center justify-between px-4 lg:px-10 py-4 lg:bg-primary dark:lg:bg-dark_primary bg-secondary dark:bg-dark_secondary z-20 fixed">
            <ContactInfo />
            <Link href={isFriend ? "/contacts/modify" : "/contacts/add"}>
                <HiDotsVertical className="text-2xl" />
            </Link>
        </div>
    )
}

export default ChatHeader
