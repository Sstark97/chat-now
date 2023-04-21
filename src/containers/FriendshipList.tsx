import type { FriendshipListProps } from "@customTypes/containers"
import Friendship from "@components/Friendship"

/**
 * Este componente es el que se encarga de mostrar la lista de relaciones entre usuario y contacto
 * @param {FriendshipListProps} { friendships } - friendships: lista de relaciones entre usuario y contacto
 * @returns component
 * @example <FriendshipList friendships={friendships} />
 */
const FriendshipList = ({ friendships }: FriendshipListProps) => {
    return (
        <div className="w-[90%] mt-8 mx-auto">
            {friendships.map((friendship) => (
                <Friendship
                    key={friendship.id}
                    id={friendship.id}
                    name={friendship.name}
                    time={friendship.time}
                    message={friendship.message}
                    numMessages={friendship.numMessages}
                    status={friendship.status}
                />
            ))}
        </div>
    )
}

export default FriendshipList
