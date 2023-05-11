import useChatContext from "@hooks/useChatContext"
import FriendshipList from "@containers/FriendshipList"
import Searcher from "@components/Searcher"
import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import OpenChat from "@containers/OpenChat"
import type { ChatProps } from "@customTypes/containers"
import { useState } from "react"

/**
 * Este componente es el encargado de mostrar el contenedor de chats
 * @param {ChatProps} { message, friendships, children }
 * - message: Mensaje a mostrar cuando no hay chats
 * - friendships: Lista de chats
 * - children: Componente a renderizar
 * @returns component
 * @example <Chat message="No hay chats" friendships={chats} />
 */
const Chat = ({ message, friendships, children }: ChatProps) => {
    const { selectedChat } = useChatContext()
    const isChatOpen = Object.keys(selectedChat).length !== 0

    const [searchText, setSearchText] = useState("")

    const filteredFriendships = friendships.filter((friendship) =>
        friendship.name.toLowerCase().startsWith(searchText.toLowerCase())
    )

    return (
        <>
            <div className="flex h-screen">
                <div
                    className={`w-full lg:w-[28%] relative ${isChatOpen ? "hidden" : ""} lg:block`}
                >
                    <NavBar />
                    <Searcher searchText={searchText} setSearchText={setSearchText} />
                    {children}
                    {filteredFriendships.length === 0 ? (
                        <h1 className="text-center mt-16 ">{message}</h1>
                    ) : (
                        <FriendshipList friendships={filteredFriendships} />
                    )}
                </div>

                {isChatOpen ? <OpenChat className="lg:hidden" /> : <></>}
                <ChatDesktop />
            </div>
        </>
    )
}

export default Chat
