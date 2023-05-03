import { useContext } from "react"
import { ChatContext } from "@context/ChatProvider"
import OpenChat from "@containers/OpenChat"

/**
 * Este componente es el encargado de mostrar el chat en la versión desktop
 * @returns component
 * @example <ChatDesktop />
 */
const ChatDesktop = () => {
    const { selectedChat } = useContext(ChatContext)
    const isChatOpen = Object.keys(selectedChat).length !== 0

    return (
        <>
            {!isChatOpen ? (
                <div className="w-[.2rem] h-full hidden lg:block bg-primary"></div>
            ) : (
                <></>
            )}
            <div className="w-[72%] h-full hidden lg:block bg-secondary">
                {isChatOpen ? <OpenChat /> : <></>}
            </div>
        </>
    )
}
export default ChatDesktop
