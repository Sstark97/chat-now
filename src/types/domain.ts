import { User, Contact } from "@prisma/client"

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
 * @interface UserRepository
 * @description Interface para definir el comportamiento de un repositorio de usuarios
 * @method findUserByEmail
 * @method createUser
 * @method addContact
 * @method existContactFrom
 * @method getContactsFrom
 * @example
 * const userRepository: UserRepository = new UserPrismaRepository()
 */
interface UserRepository {
    findUserByEmail(email: string): Promise<User | null>
    createUser(credentials: Credentials): Promise<User>
    addContact(userEmail: string, contactInfo: ContactRequest): Promise<Contact>
    existContactFrom(userEmail: string, contactEmail: string): Promise<boolean>
    getContactsFrom(userEmail: string): Promise<Contact[]>
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

export type {
    Credentials,
    User,
    UserRepository,
    UserResponse,
    UserLoginResponse,
    ContactRequest,
    ErrorResponse,
}
