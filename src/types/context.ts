import { MutableRefObject } from "react"
import { Chats, Contacts, MessageResponse } from "@customTypes/domain"
import { PostgrestSingleResponse, SupabaseClient } from "@supabase/supabase-js"
import type { FriendshipProps } from "@customTypes/components"

/**
 * @interface ChatContext
 * @description Propiedades del contexto de los Chats
 * @property {MutableRefObject<HTMLDivElement>} ref - Referencia al formulario
 * @property {boolean} error - Error del formulario
 * @property {Function} handleSetErrorsInForm - Función para setear los errores en el formulario
 * @property {Function} reloadContacts - Función para recargar los contactos
 * @property {Function} handleOpenChat - Función para abrir un chat
 * @property {Function} handleCloseChat - Función para cerrar un chat
 */
interface ChatContext {
    ref: MutableRefObject<HTMLDivElement>
    error: boolean
    contacts: Contacts[]
    selectedChat: Contacts
    handleSetErrorsInForm(): void
    reloadContacts(): Promise<void>
    handleOpenChat(id: string): void
    handleCloseChat(): void
}

/**
 * @interface RealTimeContext
 * @description Propiedades del contexto de tiempo real
 * @property {SupabaseClient} supabase - Cliente de Supabase
 * @property {Function} getAllChats - Función para obtener todos los chats
 */
interface RealTimeContext {
    supabase: SupabaseClient
    getAllChats(id: string): Promise<PostgrestSingleResponse<Chats[]>>
    getAllMessages(userId: string, contactId: string): Promise<MessageResponse>
    createChatWithUser(userId: string, contactId: string): Promise<void>
    sendMessage(userId: string, contactId: string, message: string): Promise<void>
    getChats(userId: string): Promise<FriendshipProps[]>
}

export type { ChatContext, RealTimeContext }
