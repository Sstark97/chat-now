import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"
import MessageList from "@containers/MessageList"
import { useContext, useEffect, useState } from "react"
import useChatMembersId from "@hooks/useChatMembersId"
import { RealTimeContext } from "@context/RealTimeProvider"
import type { OpenChatProps } from "@customTypes/containers"

/**
 * Este componente es el encargado de mostrar el chat abierto
 * @param className
 * @component
 * @example <OpenChat />
 */
const OpenChat = ({ className }: OpenChatProps) => {
    const { userId, contactId } = useChatMembersId()
    const { getAllMessages } = useContext(RealTimeContext)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchMessages = async () => {
            const messages = await getAllMessages(userId, contactId)
            setMessages(messages.data)
        }

        fetchMessages()
    }, [contactId])

    return (
        <div className={`w-full h-screen ${className}`}>
            <ChatHeader />
            {messages.length > 0 ? <MessageList messages={messages} /> : <p>loading...</p>}
            <MessageInput />
        </div>
    )
}

export default OpenChat