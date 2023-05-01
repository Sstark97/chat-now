import { FriendshipProps } from "@customTypes/components"
import { Messages } from "@customTypes/domain"
import { ChildrenProps } from "./global"

/**
 * @interface FriendshipListProps
 * @description Propiedades del componente FriendshipList
 * @property {Array<FriendshipProps>} Friendships - Lista de Friendships
 */
interface FriendshipListProps {
    friendships: FriendshipProps[]
}

/**
 * @interface MessageListProps
 * @description Propiedades del componente MessageList
 * @property {Array<Messages>} Messages - Lista de mensajes
 */
interface MessageListProps {
    messages: Messages[]
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
 * @property {Array<FriendshipProps>} Friendships - Lista de Friendships
 * @property children - Componentes hijos
 */
interface ChatProps extends FriendshipListProps, ChildrenProps {
    message: string
}

export type { FriendshipListProps, MessageListProps, OpenChatProps, ChatProps }
