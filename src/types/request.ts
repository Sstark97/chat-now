import { NextApiRequest } from "next"

/**
 * @interface UserRequest
 * @description Propiedades de la petición de un usuario
 * @property {string} name - Nombre del usuario
 * @property {string} email - Email del usuario
 * @property {string} password - Contraseña del usuario
 * @example
 * const userRequest: UserRequest = {
 *   name: "John Doe",
 *   email: "jhon@example.com",
 *   password: "123456"
 *   }
 */
interface UserRequest extends NextApiRequest {
    body: {
        name: string
        email: string
        password: string
    }
}

/**
 * @interface ContactRequest
 * @description Propiedades de la petición de un contacto
 * @property {string} name - Nombre del contacto
 * @property {string} email - Email del contacto
 * @example
 * const contactRequest: ContactRequest = {
 * name: "John Doe",
 * email: "jhon@example.com"
 * }
 */
interface ContactRequest extends NextApiRequest {
    body: {
        name: string
        email: string
    }
}

/**
 * @interface EditContactRequest
 * @description Propiedades de la petición para editar un contacto
 * @property {string} name - Nombre del contacto
 * @property {string} id - Id del contacto
 * @example
 * const contactRequest: ContactRequest = {
 * name: "John Doe",
 * id: "1"
 * }
 */
interface EditContactRequest extends NextApiRequest {
    body: {
        name: string
        id: string
    }
}

interface DeleteContactRequest extends NextApiRequest {
    body: {
        id: string
    }
}

/**
 * @interface ValidateResponse
 * @description Propiedades de la respuesta de validación
 * @property {number} status - Código de estado HTTP
 * @property {string} error - Mensaje de error
 */
interface ValidateResponse {
    status: number
    error: string
}

export type {
    UserRequest,
    ContactRequest,
    EditContactRequest,
    DeleteContactRequest,
    ValidateResponse,
}
