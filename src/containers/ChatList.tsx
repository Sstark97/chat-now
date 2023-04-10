import type { ChatListProps } from "@customTypes/containers"
import Chat from "@components/Chat"

/**
 * Es
 */
const ChatList = ({ chats }: ChatListProps) => {
    return (
        <div className="w-[90%] mx-auto">
            {chats.map((chat) => (
                <Chat key={chat.name} name={chat.name} time={chat.time} message={chat.message} numMessages={chat.numMessages} state={chat.state} />
            ))}
        </div>
    )
}

export default ChatList
