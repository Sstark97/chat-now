import FriendshipList from "@containers/FriendshipList"
import Searcher from "@components/Searcher"
import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import { useContext, useState, useEffect } from "react"
import { RealTimeContext } from "@context/RealTimeProvider"
import useChatMembersId from "@hooks/useChatMembersId"
import type { FriendshipProps } from "@customTypes/components"

/**
 * Este componente es el encargado de mostrar el contenedor de relaciones entre usuario y contactos
 * @returns component
 * @example <FriendshipContainer />
 */
const FriendshipContainer = () => {
    const { userId } = useChatMembersId()
    const { supabase, getChats } = useContext(RealTimeContext)
    const [chats, setChats] = useState<FriendshipProps[]>([])

    const getAllChats = async () => {
        const chats = await getChats(userId)
        setChats(chats)
    }

    console.log(chats)

    useEffect(() => {
        getAllChats()
    }, [])

    return (
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar />
                <Searcher />
                <FriendshipList friendships={chats} />
            </div>
            <ChatDesktop />
        </div>
    )
}

export default FriendshipContainer
