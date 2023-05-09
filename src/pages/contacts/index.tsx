import useChatContext from "@hooks/useChatContext"
import ChatLayout from "@layouts/ChatLayout"
import Link from "next/link"
import { AiOutlinePlus } from "react-icons/ai"
import Chat from "@containers/Chat"

const Contacts = () => {
    const { contacts: friendships } = useChatContext()

    return (
        <ChatLayout>
            <Chat message="No hay contactos agregados" friendships={friendships}>
                <Link
                    className="absolute top-24 right-10 lg:top-48 lg:right-12"
                    href="/contacts/add"
                >
                    <AiOutlinePlus className="p-[.4rem] text-3xl text-secondary dark:text-dark_secondary bg-light_purple dark:bg-dark_purple rounded-full" />
                </Link>
            </Chat>
        </ChatLayout>
    )
}

export default Contacts
