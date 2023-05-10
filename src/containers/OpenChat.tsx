import { useEffect, useState } from "react"
import useSocket from "@hooks/useSocket"
import useRealTimeContext from "@hooks/useRealTimeContext"
import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"
import MessageList from "@containers/MessageList"
import useChatMembersId from "@hooks/useChatMembersId"
import type { OpenChatProps } from "@customTypes/containers"
import type { Message } from "@customTypes/domain"
import useLastMessageRef from "@hooks/useLastMessageRef"

/**
 * Este componente es el encargado de mostrar el chat abierto
 * @param className
 * @component
 * @example <OpenChat />
 */
const OpenChat = ({ className }: OpenChatProps) => {
    const [messages, setMessages] = useState<Message[]>([])
    const { userId, contactId } = useChatMembersId()
    const lastMessageRef = useLastMessageRef(messages)
    const { getAllMessages } = useRealTimeContext()
    const socket = useSocket()

    useEffect(() => {
        getMessages()
    }, [contactId])

    useEffect(() => {
        socket?.on("receive-message", (data) => {
            setMessages((pre) => [...pre, data])
        })
    }, [socket])

    const getMessages = async () => {
        const messages = await getAllMessages(userId, contactId)
        setMessages(messages.data)
    }

    return (
        <div className={`w-full h-screen ${className}`}>
            <ChatHeader />
            {messages ? (
                <MessageList messages={messages} lastMessageRef={lastMessageRef} />
            ) : (
                <p>loading...</p>
            )}
            <MessageInput socket={socket} />
        </div>
    )
}

export default OpenChat
