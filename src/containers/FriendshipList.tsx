import type { FriendshipListProps } from "@customTypes/containers"
import Friendship from "@components/Friendship"

/**
 * Este componente es el que se encarga de mostrar la lista de chats
 * @param chats Lista de chats
 * @returns component
 * @example
 * <ChatList chats={chats} />
 */
const FriendshipList = ({ friendships }: FriendshipListProps) => {
    return (
        <div className="w-[90%] mt-8 mx-auto">
            {friendships.map((friendship) => (
                <Friendship
                    key={friendship.name}
                    name={friendship.name}
                    time={friendship.time}
                    message={friendship.message}
                    numMessages={friendship.numMessages}
                    state={friendship.state}
                />
            ))}
        </div>
    )
}

export default FriendshipList
