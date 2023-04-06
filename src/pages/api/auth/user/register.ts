import { UserFactory } from "@lib/factories/UserFactory"
import { errors } from "@lib/const"
import type { NextApiResponse } from "next"
import type { UserRequest } from "@customTypes/request"
import type { UserResponse, ErrorResponse } from "@customTypes/domain"

const userService = UserFactory.createUserService()

/**
 * Comprueba si hay errores en los datos del usuario
 * @param req {UserRequest}
 * @param res {NextApiResponse<ErrorResponse>}
 * @returns {Promise<void>}
 * @example
 * await checkErrorsInRegisterFrom(req, res)
 */
const checkErrorsInRegisterFrom = async (req: UserRequest, res: NextApiResponse<ErrorResponse>) => {
    const { email, password } = req.body

    if (req.method !== "POST") {
        res.status(405).end()
    }

    if (await userService.existUserFrom(req.body)) {
        return res.status(400).json({ error: `Ya existe un usuario con el email ${email}` })
    } else if (!userService.validateUserFrom(password)) {
        return res.status(400).json({ error: errors.strictPassword.errorMessage })
    }
}

export default async function handler(req: UserRequest, res: NextApiResponse<UserResponse | ErrorResponse>) {
    await checkErrorsInRegisterFrom(req, res)

    const user = await userService.getUserWithEncryptedPasswordFrom(req)
    const userRegistered = (await userService.register(user)) as UserResponse

    if (user !== null) {
        return res.status(200).json(userRegistered)
    }
}
