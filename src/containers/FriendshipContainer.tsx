import { useContext, useState, useEffect } from "react"
import { RealTimeContext } from "@context/RealTimeProvider"
import useChatMembersId from "@hooks/useChatMembersId"
import type { FriendshipProps } from "@customTypes/components"

import Chat from "@containers/Chat"

/**
 * Este componente es el encargado de mostrar el contenedor de relaciones entre usuario y contactos
 * @returns component
 * @example <FriendshipContainer />
 */
const FriendshipContainer = () => {
    const { userId } = useChatMembersId()
    const { getChats } = useContext(RealTimeContext)
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
