import { MutableRefObject } from "react"
import type { Friendship } from "@customTypes/components"

/**
 * @interface ChatContext
 * @description Propiedades del contexto de los Chats
 * @property {MutableRefObject<HTMLDivElement>} ref - Referencia al formulario
 * @property {boolean} error - Error del formulario
 * @property {Function} handleSetErrorsInForm - Función para setear los errores en el formulario
 * @property {Function} reloadContacts - Función para recargar los contactos
 * @property {Function} handleOpenChat - Función para abrir un chat
 * @property {Function} handleCloseChat - Función para cerrar un chat
 * @property {Function} handleChangeSelectedChatName - Función para cambiar el nombre del chat seleccionado
 */
interface ChatContext {
    ref: MutableRefObject<HTMLDivElement>
    error: boolean
    contacts: Friendship[]
    selectedChat: Friendship
    handleSetErrorsInForm(): void
    reloadContacts(): Promise<void>
    handleOpenChat(friendship: Friendship): void
    handleCloseChat(): void
    handleChangeSelectedChatName(name: string): void
}

export type { ChatContext }
