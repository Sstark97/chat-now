import FriendshipList from "@containers/FriendshipList"
import Searcher from "@components/Searcher"
import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import { useContext, useEffect, useState } from "react"
import { RealTimeContext } from "@context/RealTimeProvider"
import { useSession } from "next-auth/react"

const friendships = [
    {
        id: "1",
        name: "Juan Trabajo",
        time: "12:30",
        message: "Mañana podemos hablarlo mejor y jajajajaasdadasdasdasdad",
        numMessages: 2,
        status: "online",
    },
    {
        id: "2",
        name: "María",
        time: "10:14",
        message: "Vale!",
        numMessages: 1,
        status: "busy",
    },
    {
        id: "3",
        name: "Pedro 1ºDAW",
        time: "Ayer",
        message: "Genial tío, pues ya hablamos en otro momento",
        status: "offline",
    },
    {
        id: "4",
        name: "Paula prima",
        time: "Ayer",
        message: "√√ Graciaaas",
        status: "absent",
    },
    {
        id: "5",
        name: "Darío",
        time: "Domingo",
        message: "√ ¿A qué hora?",
        status: "offline",
    },
]

/**
 * Este componente es el encargado de mostrar el contenedor de relaciones entre usuario y contactos
 * @returns component
 * @example <FriendshipContainer />
 */
const FriendshipContainer = () => {
    const { data: session } = useSession()
    const { supabase, getAllChats, getAllMessages } = useContext(RealTimeContext)
    const [chatWatcher, setChatWatcher] = useState<any>(null)

    useEffect(() => {
        const fetchChats = async () => {
            const userId = session?.user?.id as string
            const { data: allChats } = await getAllChats(userId)
            const { data: allMessages } = await getAllMessages(5)

            console.log(allMessages)

            const chatsWatcher = supabase
                .channel("custom-all-channel")
                .on(
                    "postgres_changes",
                    { event: "*", schema: "public", table: "Chat" },
                    async () => {
                        console.log("chats changed")
                        const { data: allChats } = await getAllChats(userId)
                    }
                )
                .subscribe()
            setChatWatcher(chatsWatcher)
        }

        if (session) {
            fetchChats()
        }

        return () => {
            chatWatcher?.unsubscribe()
        }
    }, [session, getAllChats, supabase])

    console.log(chatWatcher)

    return (
        <div className="flex h-screen">
            <div className="w-full lg:w-[28%] relative">
                <NavBar />
                <Searcher />
                <FriendshipList friendships={friendships} />
            </div>
            <ChatDesktop />
        </div>
    )
}

export default FriendshipContainer
