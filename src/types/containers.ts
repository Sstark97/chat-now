import { Friendship } from "@customTypes/components"
import { Message } from "@customTypes/domain"
import { ChildrenProps } from "./global"

/**
 * @interface FriendshipListProps
 * @description Propiedades del componente FriendshipList
 * @property {Array<Friendship>} Friendships - Lista de Friendships
 */
interface FriendshipListProps {
    friendships: Friendship[]
}

/**
 * @interface MessageListProps
 * @description Propiedades del componente MessageList
 * @property {Array<Message>} Message - Lista de mensajes
 */
interface MessageListProps {
    messages: Message[]
}

/**
 * @interface OpenChatProps
 * @description Propiedades del componente OpenChat
 * @property {string} className - Clase del componente
 */
interface OpenChatProps {
    className?: string
}

/**
 * @interface ChatProps
 * @description Propiedades del componente Chat
 * @property {string} message - Mensaje a enviar
 * @property {Array<Friendship>} Friendships - Lista de Friendships
 * @property children - Componentes hijos
 */
interface ChatProps extends FriendshipListProps, ChildrenProps {
    message: string
}

interface SearcherProps {
    searchText: string
    setSearchText: (searchText: string) => void
}

export type { FriendshipListProps, MessageListProps, OpenChatProps, ChatProps, SearcherProps }
