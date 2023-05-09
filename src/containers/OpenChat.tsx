import { useEffect, useRef, useState } from "react"
import io, { Socket } from "socket.io-client"
import useRealTimeContext from "@hooks/useRealTimeContext"
import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"
import MessageList from "@containers/MessageList"
import useChatMembersId from "@hooks/useChatMembersId"
import type { OpenChatProps } from "@customTypes/containers"
import type { Message } from "@customTypes/domain"

const useSocket = () => {
    const socketRef = useRef<Socket>()

    useEffect(() => {
        const socketInit = async () => {
            await fetch("/api/socket")
            socketRef.current = io()
        }

        socketInit()

        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect()
            }
        }
    }, [])

    return socketRef.current as Socket
}

/**
 * Este componente es el encargado de mostrar el chat abierto
 * @param className
 * @component
 * @example <OpenChat />
 */
const OpenChat = ({ className }: OpenChatProps) => {
    const { userId, contactId } = useChatMembersId()
    const { getAllMessages } = useRealTimeContext()
    const [messages, setMessages] = useState<Message[]>([])
    const socket = useSocket()

    const getMessages = async () => {
        const messages = await getAllMessages(userId, contactId)
        setMessages(messages.data)
    }

    useEffect(() => {
        getMessages()
    }, [contactId])

    useEffect(() => {
        socket?.on("receive-message", (data) => {
            setMessages((pre) => [...pre, data])
        })

        return () => {
            if (socket) socket.disconnect()
        }
    }, [socket])

    // async function socketInitializer() {
    //     await fetch("/api/socket")
    //
    //     socket = io()
    //
    //     socket.on("receive-message", (data) => {
    //         setMessages((pre) => [...pre, data])
    //     })
    // }

    return (
        <div className={`w-full h-screen ${className}`}>
            <ChatHeader />
            {messages ? <MessageList messages={messages} /> : <p>loading...</p>}
            <MessageInput socket={socket} />
        </div>
    )
}

export default OpenChat
