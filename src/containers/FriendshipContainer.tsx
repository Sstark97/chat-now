import { useState, useEffect, useCallback } from "react"
import useChatMembersId from "@hooks/useChatMembersId"
import useSocket from "@hooks/useSocket"
import Chat from "@containers/Chat"
import type { Friendship } from "@customTypes/components"
import { getFrom } from "@lib/utils/fetcher"
import { SOCKET_SERVER } from "@lib/constants/links"
import toast from "react-hot-toast"
import Notification from "@components/Notification"

/**
 * Este componente es el encargado de mostrar el contenedor de relaciones entre usuario y contactos
 * @returns component
 * @example <FriendshipContainer />
 */
const FriendshipContainer = () => {
    const { userId } = useChatMembersId()
    const socket = useSocket()
    const [chats, setChats] = useState<Friendship[]>([])

    // toast.custom((t) => <Notification t={t} />)

    /**
     * Función para obtener todos los chats
     * @returns void
     * @example getAllChats()
     */
    const getAllChats = useCallback(async () => {
        const chats = await getFrom(`${SOCKET_SERVER}chats?userId=${userId}`)
        setChats(chats)
    }, [userId])

    useEffect(() => {
        getAllChats()
    }, [getAllChats])

    useEffect(() => {
        socket?.on("reload-chats", () => {
            getAllChats()
        })

        socket?.on("notify", (data) => {
            const { id, name, image, message } = data
            if (id !== userId) {
                toast.custom((t) => (
                    <Notification
                        t={t}
                        name={name}
                        profilePicture={image}
                        message={message as string}
                    />
                ))
            }
        })
    }, [socket, getAllChats])

    return <Chat message="No hay chats" friendships={chats} />
}

export default FriendshipContainer
