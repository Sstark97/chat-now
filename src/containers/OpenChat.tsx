import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"

const OpenChat = () => {
    return (
        <div className="relative w-full h-screen">
            <ChatHeader />
            <MessageInput />
        </div>
    )
}

export default OpenChat
