import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"
import MessageList from "@containers/MessageList"
import { OpenChatProps } from "@customTypes/containers"
import { useContext, useEffect, useState } from "react"
import { RealTimeContext } from "@context/RealTimeProvider"
import { ChatContext } from "@context/ChatProvider"
import { useSession } from "next-auth/react"

/**
 * Este componente es el encargado de mostrar el chat abierto
 * @param className
 * @component
 * @example <OpenChat />
 */
const OpenChat = ({ className }: OpenChatProps) => {
    const { data: session } = useSession()
    const { selectedChat } = useContext(ChatContext)
    const { getAllMessages } = useContext(RealTimeContext)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchMessages = async () => {
            const messages = await getAllMessages(
                session?.user?.id as string,
                selectedChat?.id as string
            )
            setMessages(messages.data)
        }

        fetchMessages()
    }, [selectedChat])

    return (
        <div className={`w-full h-screen ${className}`}>
            <ChatHeader />
            {messages.length > 0 ? <MessageList messages={messages} /> : <p>loading...</p>}
            <MessageInput />
        </div>
    )
}

export default OpenChat
