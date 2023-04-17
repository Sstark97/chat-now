import type { ChatListProps } from "@customTypes/containers"
import Chat from "@components/Chat"

/**
 * Este componente es el que se encarga de mostrar la lista de chats
 * @param chats Lista de chats
 * @returns component
 * @example
 * <ChatList chats={chats} />
 */
const ChatList = ({ chats }: ChatListProps) => {
    return (
        <div className="w-[90%] mt-8 mx-auto">
            {chats.map((chat) => (
                <Chat key={chat.name} name={chat.name} time={chat.time} message={chat.message} numMessages={chat.numMessages} state={chat.state} />
            ))}
        </div>
    )
}

export default ChatList
