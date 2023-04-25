import { MutableRefObject } from "react"
import { Contacts } from "@customTypes/domain"
import { PostgrestSingleResponse, SupabaseClient } from "@supabase/supabase-js"

/**
 * @interface Context
 * @description Propiedades del contexto
 * @property {MutableRefObject<HTMLDivElement>} ref - Referencia al formulario
 * @property {boolean} error - Error del formulario
 * @property {Function} handleSetErrorsInForm - Función para setear los errores en el formulario
 * @property {Function} reloadContacts - Función para recargar los contactos
 * @property {Function} handleOpenChat - Función para abrir un chat
 * @property {Function} handleCloseChat - Función para cerrar un chat
 */
interface Context {
    ref: MutableRefObject<HTMLDivElement>
    error: boolean
    contacts: Contacts[]
    selectedChat: Contacts
    supabase: SupabaseClient
    handleSetErrorsInForm(): void
    reloadContacts(): Promise<void>
    handleOpenChat(id: string): void
    handleCloseChat(): void
    getAllChats(id: string): Promise<PostgrestSingleResponse<any>>
}

export type { Context }
