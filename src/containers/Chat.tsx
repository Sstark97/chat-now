import FriendshipList from "@containers/FriendshipList"
import Searcher from "@components/Searcher"
import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import { useContext } from "react"
import { ChatContext } from "@context/ChatProvider"
import OpenChat from "@containers/OpenChat"

/**
 * Este componente es el encargado de mostrar el contenedor de chats
 * @param {string} message - Mensaje a mostrar cuando no hay chats
 * @param {FriendshipProps[]} friendships - Lista de chats
 * @param {ReactNode} children - Componente a renderizar
 * @returns component
 * @example <Chat message="No hay chats" friendships={chats} />
 */
const Chat = ({ message, friendships, children }: any) => {
    const { selectedChat } = useContext(ChatContext)
    const isChatOpen = Object.keys(selectedChat).length !== 0

    return (
        <>
            <div className="flex h-screen">
                <div
                    className={`w-full lg:w-[28%] relative ${isChatOpen ? "hidden" : ""} lg:block`}
                >
                    <NavBar />
                    <Searcher />
                    {children}
                    {friendships.length === 0 ? (
                        <h1 className="text-center mt-16 ">{message}</h1>
                    ) : (
                        <FriendshipList friendships={friendships} />
                    )}
                </div>

                {isChatOpen ? (
                    <>
                        <OpenChat className="lg:hidden" />
                        <ChatDesktop />
                    </>
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}

export default Chat
