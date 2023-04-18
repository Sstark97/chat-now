import { FriendshipProps } from "@customTypes/components"

/**
 * @interface FriendshipListProps
 * @description Propiedades del componente FriendshipList
 * @property {Array<FriendshipProps>} Friendships - Lista de Friendships
 */
interface FriendshipListProps {
    friendships: FriendshipProps[]
}

export type { FriendshipListProps }
