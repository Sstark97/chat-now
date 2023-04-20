import { useContext } from "react"
import { ChatContext } from "@context/ChatProvider"

/**
 * Este componente es el encargado de mostrar el chat en la versión desktop
 * @returns component
 * @example <ChatDesktop />
 */
const ChatDesktop = () => {
    const { selectedChat } = useContext(ChatContext)
    return (
        <>
            <div className="w-[.2rem] h-full hidden lg:block bg-primary"></div>
            <div className="w-[71.9%] h-full hidden lg:block bg-secondary">
                {selectedChat ? <p>{selectedChat.name}</p> : <></>}
            </div>
        </>
    )
}
export default ChatDesktop
