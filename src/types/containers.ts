import { FriendshipProps } from "@customTypes/components"
import { Messages } from "@customTypes/domain"

/**
 * @interface FriendshipListProps
 * @description Propiedades del componente FriendshipList
 * @property {Array<FriendshipProps>} Friendships - Lista de Friendships
 */
interface FriendshipListProps {
    friendships: FriendshipProps[]
}

interface MessageListProps {
    messages: Messages[]
}

interface OpenChatProps {
    className?: string
}

export type { FriendshipListProps, MessageListProps, OpenChatProps }
