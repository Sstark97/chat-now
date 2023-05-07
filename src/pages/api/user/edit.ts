import { NextApiResponse } from "next"
import { UserFactory } from "@lib/factories/UserFactory"
import type { User } from "@prisma/client"
import type { EditUserRequest } from "@customTypes/request"
import type { ErrorResponse } from "@customTypes/domain"

const userService = UserFactory.createUserService()

/**
 * Comprueba si hay errores en los datos del usuario
 * @param req {EditContactRequest}
 * @param res {NextApiResponse<ErrorResponse>}
 * @returns {Promise<void>}
 * @example
 * await checkErrorsInRegisterFrom(req, res)
 */

/**
 * @description Manejador de la ruta /api/contacts/edit
 * @param req {EditContactRequest}
 * @param res {NextApiResponse<Contact | ErrorResponse>}
 * @returns {Promise<void>}
 */
export default async function handler(
    req: EditUserRequest,
    res: NextApiResponse<User | ErrorResponse>
) {
    // const errorResponse = await checkErrorsFrom(req, res)
    //
    // if (errorResponse.status) {
    //     return res.status(errorResponse.status).json({ message: errorResponse.error })
    // }

    const { name, email, password } = req.body
    const userUpdated = await userService.edit({ name, email, password })

    return res.status(200).json(userUpdated)
}
