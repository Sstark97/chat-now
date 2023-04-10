import { ReactNode } from "react"
import { ChatProps } from "@customTypes/components"

/**
 * @interface ChildrenProps
 * @description Propiedades de un componente que tiene children
 * @property {ReactNode} children - Children del componente
 */
interface ChildrenProps {
    children?: ReactNode
}

/**
 * @interface ChatListProps
 * @description Propiedades del componente ChatList
 * @property {Array<ChatProps>} chats - Lista de chats
 */
interface ChatListProps {
    chats: Array<ChatProps>
}

export type { ChildrenProps, ChatListProps }
