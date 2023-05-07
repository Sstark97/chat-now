import { NextApiResponse } from "next"
import { UserFactory } from "@lib/factories/UserFactory"
import type { User } from "@prisma/client"
import type { EditUserRequest } from "@customTypes/request"
import type { ErrorResponse } from "@customTypes/domain"

const userService = UserFactory.createUserService()
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
    const { name, email, password } = req.body
    const userUpdated = await userService.edit({ name, email, password })

    return res.status(200).json(userUpdated)
}
