import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"
import MessageList from "@containers/MessageList"
import { useContext, useEffect, useState } from "react"
import useChatMembersId from "@hooks/useChatMembersId"
import { RealTimeContext } from "@context/RealTimeProvider"
import type { OpenChatProps } from "@customTypes/containers"
import { Messages } from "@customTypes/domain"

/**
 * Este componente es el encargado de mostrar el chat abierto
 * @param className
 * @component
 * @example <OpenChat />
 */
const OpenChat = ({ className }: OpenChatProps) => {
    const { userId, contactId } = useChatMembersId()
    const { supabase, getAllMessages } = useContext(RealTimeContext)
    const [messages, setMessages] = useState<Messages[]>([])

    const getMessages = async () => {
        const messages = await getAllMessages(userId, contactId)
        setMessages(messages.data)
    }

    useEffect(() => {
        getMessages()
        supabase
            .channel("custom-all-channel")
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "Message" },
                async () => {
                    await getMessages()
                }
            )
            .subscribe()
    }, [contactId, contactId, getMessages, supabase])

    return (
        <div className={`w-full h-screen ${className}`}>
            <ChatHeader />
            {messages ? <MessageList messages={messages} /> : <p>loading...</p>}
            <MessageInput />
        </div>
    )
}

export default OpenChat
