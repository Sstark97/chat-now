import { useEffect, useState } from "react"
import useRealTimeContext from "@hooks/useRealTimeContext"
import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"
import MessageList from "@containers/MessageList"
import useChatMembersId from "@hooks/useChatMembersId"
import type { OpenChatProps } from "@customTypes/containers"
import type { Message } from "@customTypes/domain"

/**
 * Este componente es el encargado de mostrar el chat abierto
 * @param className
 * @component
 * @example <OpenChat />
 */
const OpenChat = ({ className }: OpenChatProps) => {
    const { userId, contactId } = useChatMembersId()
    const { supabase, getAllMessages } = useRealTimeContext()
    const [messages, setMessages] = useState<Message[]>([])

    const getMessages = async () => {
        const messages = await getAllMessages(userId, contactId)
        setMessages(messages.data)
    }

    useEffect(() => {
        getMessages()
        supabase
            .channel(`custom-chat-${contactId}`)
            .on(
                "postgres_changes",
                { event: "*", schema: "public", table: "Message" },
                async () => {
                    await getMessages()
                }
            )
            .subscribe()
    }, [contactId, getMessages, supabase, userId])

    return (
        <div className={`w-full h-screen ${className}`}>
            <ChatHeader />
            {messages ? <MessageList messages={messages} /> : <p>loading...</p>}
            <MessageInput />
        </div>
    )
}

export default OpenChat
