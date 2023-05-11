import { useCallback, useEffect, useState } from "react"
import useSocket from "@hooks/useSocket"
import useChatMembersId from "@hooks/useChatMembersId"
import useLastMessageRef from "@hooks/useLastMessageRef"
import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"
import MessageList from "@containers/MessageList"
import { getFrom } from "@lib/utils/fetcher"
import type { OpenChatProps } from "@customTypes/containers"
import type { Message } from "@customTypes/domain"
import { SOCKET_SERVER } from "@lib/constants/links"

/**
 * Este componente es el encargado de mostrar el chat abierto
 * @param className
 * @component
 * @example <OpenChat />
 */
const OpenChat = ({ className }: OpenChatProps) => {
    const [messages, setMessages] = useState<Message[]>([])
    const { userId, contactId } = useChatMembersId()
    const socket = useSocket()
    const lastMessageRef = useLastMessageRef(messages)

    const getMessages = useCallback(async () => {
        const messages = await getFrom(
            `${SOCKET_SERVER}messages?userId=${userId}&contactId=${contactId}`
        )

        console.log(messages)
        setMessages(messages)
    }, [userId, contactId])

    useEffect(() => {
        getMessages()
    }, [contactId, getMessages])

    useEffect(() => {
        socket?.on("receive-message", (data) => {
            const { chat_id } = data
            const lastMessage = messages.at(-1)
            if (chat_id === lastMessage?.chat_id || messages.length === 0) {
                setMessages((messages) => [...messages, data])
            }
        })
    }, [socket])

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
