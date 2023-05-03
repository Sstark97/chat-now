import { NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { UserFactory } from "@lib/factories/UserFactory"
import type { Contact } from "@prisma/client"
import type { ContactRequest, ValidateResponse } from "@customTypes/request"
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
const checkErrorsFrom = async (req: ContactRequest, res: NextApiResponse<ErrorResponse>) => {
    const session = await getSession({ req })
    const userEmail = session?.user?.email as string
    const { email: contactEmail } = req.body
    const response = {} as ValidateResponse

    if (req.method !== "POST") {
        res.status(405).end()
    }

    const userAlreadyExists = await userService.existUserFrom(contactEmail)
    const isContactAdded = await contactService.isAddedBy(userEmail, contactEmail)

    if (!userAlreadyExists) {
        response.status = 400
        response.error = `No existe un usuario con el email ${contactEmail}`
    } else if (isContactAdded) {
        response.status = 400
        response.error = `El usuario con el email ${contactEmail} ya está añadido`
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
    req: ContactRequest,
    res: NextApiResponse<Contact | ErrorResponse>
) {
    const errorResponse = await checkErrorsFrom(req, res)

    if (errorResponse.status) {
        return res.status(errorResponse.status).json({ message: errorResponse.error })
    }

    const session = await getSession({ req })
    const userEmail = session?.user?.email as string

    const newContact = await contactService.create(userEmail, req.body)

    if (newContact !== null) {
        return res.status(200).json(newContact)
    }
}
