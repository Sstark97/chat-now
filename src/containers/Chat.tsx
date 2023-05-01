import FriendshipList from "@containers/FriendshipList"
import Searcher from "@components/Searcher"
import NavBar from "@components/NavBar"
import ChatDesktop from "@components/ChatDesktop"
import { useContext } from "react"
import { ChatContext } from "@context/ChatProvider"
import OpenChat from "@containers/OpenChat"

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
