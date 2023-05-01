import { useState, useEffect } from "react"
import useRealTimeContext from "@hooks/useRealTimeContext"
import useChatMembersId from "@hooks/useChatMembersId"
import Chat from "@containers/Chat"
import type { FriendshipProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar el contenedor de relaciones entre usuario y contactos
 * @returns component
 * @example <FriendshipContainer />
 */
const FriendshipContainer = () => {
    const { userId } = useChatMembersId()
    const { getChats } = useRealTimeContext()
    const [chats, setChats] = useState<FriendshipProps[]>([])

    const getAllChats = async () => {
        const chats = await getChats(userId)
        setChats(chats)
    }

    useEffect(() => {
        getAllChats()
    }, [])

    return <Chat message="No hay chats" friendships={chats} />
}

export default FriendshipContainer
