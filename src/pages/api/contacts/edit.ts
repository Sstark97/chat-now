import { NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { UserFactory } from "@lib/factories/UserFactory"
import type { Contact } from "@prisma/client"
import type { EditContactRequest, ValidateResponse } from "@customTypes/request"
import type { ErrorResponse } from "@customTypes/domain"
import { ContactFactory } from "@lib/factories/ContactFactory"

const userService = UserFactory.createUserService()
const contactService = ContactFactory.createContactService()

/**
 * Comprueba si hay errores en los datos del usuario
 * @param req {UserRequest}
 * @param res {NextApiResponse<ErrorResponse>}
 * @returns {Promise<void>}
 * @example
 * await checkErrorsInRegisterFrom(req, res)
 */
const checkErrorsFrom = async (req: EditContactRequest, res: NextApiResponse<ErrorResponse>) => {
    const { id: contactId } = req.body
    const response = {} as ValidateResponse

    if (req.method !== "PUT") {
        res.status(405).end()
    }

    const userAlreadyExists = await userService.existUserFromID(contactId)

    if (!userAlreadyExists) {
        response.status = 400
        response.error = "No existe un usuario"
    }

    return response
}

/**
 * @description Manejador de la ruta /api/contacts/add
 * @param req {UserRequest}
 * @param res {NextApiResponse<UserResponse | ErrorResponse>}
 * @returns {Promise<void>}
 */
export default async function handler(
    req: EditContactRequest,
    res: NextApiResponse<Contact | ErrorResponse>
) {
    const errorResponse = await checkErrorsFrom(req, res)

    if (errorResponse.status) {
        return res.status(errorResponse.status).json({ message: errorResponse.error })
    }

    const session = await getSession({ req })
    const userEmail = session?.user?.email as string

    const { id: contactId, name } = req.body

    await contactService.edit(userEmail, contactId, name)

    return res.status(200).json({ message: "Contact update success!" })
}
