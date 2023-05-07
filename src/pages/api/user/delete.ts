import { NextApiResponse } from "next"
import { UserFactory } from "@lib/factories/UserFactory"
import { getServerSession } from "next-auth"
import authConfig from "@pages/api/auth/[...nextauth]"
import type { User } from "@prisma/client"
import type { DeleteUserRequest, ValidateResponse } from "@customTypes/request"
import type { ErrorResponse } from "@customTypes/domain"

const userService = UserFactory.createUserService()

/**
 * Comprueba si hay errores en los datos del usuario
 * @param req {DeleteUserRequest}
 * @param res {NextApiResponse<ErrorResponse>}
 * @returns {Promise<void>}
 * @example
 * await checkErrorsInRegisterFrom(req, res)
 */
const checkErrorsFrom = async (req: DeleteUserRequest, res: NextApiResponse<ErrorResponse>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const session = await getServerSession(req, res, authConfig)
    const userEmailInSession = session?.user?.email as string
    const { email } = req.body
    const response = {} as ValidateResponse

    if (req.method !== "DELETE") {
        res.status(405).end()
    }

    if (userEmailInSession !== email) {
        response.status = 400
        response.error = "El usuario no coincide"
    }

    return response
}

/**
 * @description Manejador de la ruta /api/contacts/delete
 * @param req {DeleteUserRequest}
 * @param res {NextApiResponse<User | ErrorResponse>}
 * @returns {Promise<void>}
 */
export default async function handler(
    req: DeleteUserRequest,
    res: NextApiResponse<User | ErrorResponse>
) {
    const errorResponse = await checkErrorsFrom(req, res)

    if (errorResponse.status) {
        return res.status(errorResponse.status).json({ message: errorResponse.error })
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const session = await getServerSession(req, res, authConfig)
    const userEmailInSession = session?.user?.email as string

    await userService.delete(userEmailInSession)

    return res.status(200).json({ message: "User delete success!" })
}
