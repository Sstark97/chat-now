import { NextApiResponse } from "next"
import { UserFactory } from "@lib/factories/UserFactory"
import type { User } from "@prisma/client"
import type { EditContactRequest, EditUserRequest, ValidateResponse } from "@customTypes/request"
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
// const checkErrorsFrom = async (req: EditUserRequest, res: NextApiResponse<ErrorResponse>) => {
//     const response = {} as ValidateResponse
//
//     if (req.method !== "PUT") {
//         res.status(405).end()
//     }
//
//     const userAlreadyExists = await userService.existUserFromID(contactId)
//
//     if (!userAlreadyExists) {
//         response.status = 400
//         response.error = "No existe un usuario"
//     }
//
//     return response
// }

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

    const { userEdit } = req.body
    console.log(req.body)
    await userService.edit(userEdit)

    return res.status(200).json({ message: "User update success!" })
}
