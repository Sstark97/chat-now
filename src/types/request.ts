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
 *   email: "email: "jhon@example.com",
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

interface ContactRequest extends NextApiRequest {
    body: {
        name: string
        email: string
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

export type { UserRequest, ContactRequest, ValidateResponse }
