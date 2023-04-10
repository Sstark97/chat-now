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

interface ChatListProps {
    chats: Array<ChatProps>
}

export type { ChildrenProps, ChatListProps }
