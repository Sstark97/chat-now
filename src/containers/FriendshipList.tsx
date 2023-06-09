import type { FriendshipListProps } from "@customTypes/containers"
import FriendshipItem from "@components/FriendshipItem"
import { formatDate } from "@lib/utils/formatDate"

/**
 * Este componente es el que se encarga de mostrar la lista de relaciones entre usuario y contacto
 * @param {FriendshipListProps} { friendships }
 * - friendships: lista de relaciones entre usuario y contacto
 * @returns component
 * @example <FriendshipList friendships={friendships} />
 */
const FriendshipList = ({ friendships }: FriendshipListProps) => {
    friendships.sort((a, b) => {
        if (a.time && b.time) {
            if (a.time < b.time) {
                return 1
            }
            if (a.time > b.time) {
                return -1
            }
            return 0
        }
        return 0
    })

    return (
        <div className="w-[90%] mt-8 mx-auto">
            {friendships.map((friendship) => (
                <FriendshipItem
                    key={friendship.id}
                    id={friendship.id}
                    name={friendship.name}
                    email={friendship.email}
                    time={!friendship.time ? "" : formatDate(friendship.time)}
                    message={friendship.message}
                    numMessages={friendship.numMessages}
                    status={friendship.status}
                    image={friendship.image}
                />
            ))}
        </div>
    )
}

export default FriendshipList
