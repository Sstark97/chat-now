import ChatHeader from "@containers/ChatHeader"
import MessageInput from "@components/MessageInput"

const OpenChat = () => {
    return (
        <div className="relative h-screen">
            <ChatHeader />
            <MessageInput />
        </div>
    )
}

export default OpenChat
