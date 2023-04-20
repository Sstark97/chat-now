import { MutableRefObject } from "react"
import { Contacts } from "@customTypes/domain"

/**
 * @interface Context
 * @description Propiedades del contexto
 * @property {MutableRefObject<HTMLDivElement>} ref - Referencia al formulario
 * @property {boolean} error - Error del formulario
 * @property {Function} handleSetErrorsInForm - Función para setear los errores en el formulario
 */
interface Context {
    ref: MutableRefObject<HTMLDivElement>
    error: boolean
    contacts: Contacts[]
    selectedChat: Contacts
    handleSetErrorsInForm(): void
    reloadContacts(): Promise<void>
    handleOpenChat(id: string): void
}

export type { Context }
