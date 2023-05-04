import { Contact, Status, User } from "@prisma/client"
import { PostgrestError } from "@supabase/supabase-js"

/**
 * @typedef Credentials
 * @description Credenciales de un usuario
 * @property {string} name - Nombre del usuario
 * @property {string} email - Email del usuario
 * @property {string} password - Contraseña del usuario
 * @example
 * const credentials = {
 *    name: "John Doe",
 *    email: "jhon@example.com",
 *    password: "123456"
 *    }
 */
type Credentials = Record<"name" | "email" | "password", string> | undefined

/**
 * @interface Contacts
 * @description Interface para definir la respuesta de los contactos de un usuario
 * @property {string} id - ID del contacto
 * @property {string} name - Nombre del contacto
 * @property {string} email - Email del contacto
 * @property {string} image - Imagen del contacto
 * @property {string} status - Estado del contacto
 */
interface Contacts {
    id: string
    name: string
    email: string | null
    image: string | null
    status: string | Status
}

/**
 * @interface UserRepository
 * @description Interface para definir el comportamiento de un repositorio de usuarios
 * @method findBy
 * @method create
 * @example
 * const userRepository: UserRepository = new UserPrismaRepository()
 */
interface UserRepository {
    findBy(email: string): Promise<User | null>
    findByID(id: string): Promise<User | null>
    create(credentials: Credentials): Promise<User>
}

/**
 * @interface ContactRepository
 * @description Interface para definir el comportamiento de un repositorio de contactos
 * @method findUserBy
 * @method create
 * @method existFrom
 * @method getAllFrom
 * @example
 * const contactRepository: ContactRepository = new ContactPrismaRepository()
 */
interface ContactRepository {
    findUserBy(email: string): Promise<User | null>
    create(userEmail: string, contactInfo: ContactRequest): Promise<Contact>
    edit(userEmail: string, contactId: string, name: string): Promise<void>
    delete(userEmail: string, contactId: string): Promise<void>
    existFrom(userEmail: string, contactEmail: string): Promise<boolean>
    getAllFrom(userEmail: string): Promise<Contacts[]>
}

/**
 * @interface UserResponse
 * @description Interface para definir la respuesta de un usuario
 * @property {string} id - ID del usuario
 * @property {string | null} email - Email del usuario
 * @property {string | null} name - Nombre del usuario
 * @example
 * const userResponse: UserResponse = {
 *   id: "1",
 *   email: "jhon@example.com",
 *   name: "John Doe"
 *   }
 */
interface UserResponse {
    id: string
    email: string | null
    name: string | null
}

/**
 * @interface UserLoginResponse
 * @description Interface para definir la respuesta de un usuario al iniciar sesión
 * @property {string} id - ID del usuario
 * @property {string | null} email - Email del usuario
 * @property {string | null} name - Nombre del usuario
 * @property {string | null} password - Contraseña del usuario
 * @example
 * const userResponse: UserLoginResponse = {
 *  id: "1",
 *  email: "jhon@example.com",
 *  name: "John Doe"
 * }
 */
interface UserLoginResponse extends UserResponse {
    password?: string
}

/**
 * @interface ContactRequest
 * @description Interface para definir la solicitud de un contacto
 * @property {string} name - Nombre del contacto
 * @property {string} email - Email del contacto
 * @example
 * const contactRequest: ContactRequest = {
 * name: "John Doe",
 * email: "jhon@example.com"
 * }
 */
interface ContactRequest {
    name: string
    email: string
}

/**
 * @interface ErrorResponse
 * @description Interface para definir la respuesta de error
 * @property {string} message - Mensaje de error
 */
interface ErrorResponse {
    message: string
}

/**
 * @interface Chats
 * @description Interface para definir la respuesta de un chat
 * @property {number} chat_id - ID del chat
 */
interface Chats {
    chat_id: number
}

/**
 * @interface Message
 * @description Interface para definir la respuesta de un mensaje
 * @property {string} id - ID del mensaje
 * @property {string} text - Texto del mensaje
 * @property {string} date - Fecha del mensaje
 * @property {string} senderId - ID del usuario que envía el mensaje
 * @property {string} receiverId - ID del usuario que recibe el mensaje
 */
interface Message {
    id: string
    text: string
    date: string
    chat_id: number
    author_id: string
}

interface MessageResponse {
    data: Message[]
    error: null | PostgrestError
}

interface ContactChats {
    id: string
    image: string
    status: string
}

export type {
    Credentials,
    User,
    UserRepository,
    ContactRepository,
    UserResponse,
    UserLoginResponse,
    ContactRequest,
    ErrorResponse,
    Contacts,
    Chats,
    Message,
    MessageResponse,
    ContactChats,
}
