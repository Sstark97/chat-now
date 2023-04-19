import { UserFactory } from "@lib/factories/UserFactory"
import type { NextApiResponse } from "next"
import type { UserRequest, ValidateResponse } from "@customTypes/request"
import type { UserResponse, ErrorResponse } from "@customTypes/domain"
import { errors } from "@lib/constants/validations"

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
    const response = {} as ValidateResponse

    if (req.method !== "POST") {
        res.status(405).end()
    }

    const userAlreadyExists = await userService.existUserFrom(email)
    const passwordIsNotValid = !userService.validateUserFrom(password)

    if (userAlreadyExists) {
        response.status = 400
        response.error = `Ya existe un usuario con el email ${email}`
    } else if (passwordIsNotValid) {
        response.status = 400
        response.error = errors.security.message
    }

    return response
}

/**
 * @description Manejador de la ruta /api/auth/user/register
 * @param req {UserRequest}
 * @param res {NextApiResponse<UserResponse | ErrorResponse>}
 * @returns {Promise<void>}
 */
export default async function handler(
    req: UserRequest,
    res: NextApiResponse<UserResponse | ErrorResponse>
) {
    const errorResponse = await checkErrorsInRegisterFrom(req, res)

    if (errorResponse.status) {
        return res.status(errorResponse.status).json({ message: errorResponse.error })
    }

    const user = await userService.getUserWithEncryptedPasswordFrom(req)
    const userRegistered = (await userService.register(user)) as UserResponse

    if (user !== null) {
        return res.status(200).json(userRegistered)
    }
}
