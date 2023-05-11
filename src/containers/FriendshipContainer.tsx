import { useState, useEffect, useCallback } from "react"
import useRealTimeContext from "@hooks/useRealTimeContext"
import useChatMembersId from "@hooks/useChatMembersId"
import useSocket from "@hooks/useSocket"
import Chat from "@containers/Chat"
import type { Friendship } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar el contenedor de relaciones entre usuario y contactos
 * @returns component
 * @example <FriendshipContainer />
 */
const FriendshipContainer = () => {
    const { userId } = useChatMembersId()
    const { getChats } = useRealTimeContext()
    const socket = useSocket()
    const [chats, setChats] = useState<Friendship[]>([])

    const getAllChats = useCallback(async () => {
        const chats = await getChats(userId)
        setChats(chats)
    }, [getChats, userId])

    useEffect(() => {
        getAllChats()
    }, [getAllChats])

    useEffect(() => {
        socket?.on("reload-chats", () => {
            getAllChats()
        })
    }, [socket, getAllChats])

    return <Chat message="No hay chats" friendships={chats} />
}

export default FriendshipContainer
