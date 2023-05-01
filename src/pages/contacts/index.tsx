import { useContext } from "react"
import ChatLayout from "@layouts/ChatLayout"
import Link from "next/link"
import { AiOutlinePlus } from "react-icons/ai"
import { ChatContext } from "@context/ChatProvider"
import Chat from "@containers/Chat"

const Contacts = () => {
    const { contacts: friendships } = useContext(ChatContext)

    return (
        <ChatLayout>
            <Chat message="No hay contactos agregados" friendships={friendships}>
                <Link
                    className="absolute top-24 right-10 lg:top-48 lg:right-12"
                    href="/contacts/add"
                >
                    <AiOutlinePlus className="p-[.4rem] text-3xl text-dark bg-light_purple rounded-full" />
                </Link>
            </Chat>
        </ChatLayout>
    )
}

export default Contacts
