import { NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { UserFactory } from "@lib/factories/UserFactory"
import { ContactFactory } from "@lib/factories/ContactFactory"
import type { Contact } from "@prisma/client"
import type { DeleteContactRequest, ValidateResponse } from "@customTypes/request"
import type { ErrorResponse } from "@customTypes/domain"

const userService = UserFactory.createUserService()
const contactService = ContactFactory.createContactService()

/**
 * Comprueba si hay errores en los datos del usuario
 * @param req {DeleteContactRequest}
 * @param res {NextApiResponse<ErrorResponse>}
 * @returns {Promise<void>}
 * @example
 * await checkErrorsInRegisterFrom(req, res)
 */
const checkErrorsFrom = async (req: DeleteContactRequest, res: NextApiResponse<ErrorResponse>) => {
    const session = await getSession({ req })
    const userEmailInSession = session?.user?.email as string
    const { id: contactId, userEmail } = req.body
    const response = {} as ValidateResponse

    if (req.method !== "DELETE") {
        res.status(405).end()
    }

    const userAlreadyExists = await userService.existUserFromID(contactId)

    if (!userAlreadyExists) {
        response.status = 400
        response.error = "No existe un usuario"
    } else if (userEmailInSession !== userEmail) {
        response.status = 400
        response.error = "El usuario no coincide"
    }

    return response
}

/**
 * @description Manejador de la ruta /api/contacts/edit
 * @param req {DeleteContactRequest}
 * @param res {NextApiResponse<Contact | ErrorResponse>}
 * @returns {Promise<void>}
 */
export default async function handler(
    req: DeleteContactRequest,
    res: NextApiResponse<Contact | ErrorResponse>
) {
    const errorResponse = await checkErrorsFrom(req, res)

    if (errorResponse.status) {
        return res.status(errorResponse.status).json({ message: errorResponse.error })
    }

    const session = await getSession({ req })
    const userEmailInSession = session?.user?.email as string

    const { id: contactId } = req.body

    await contactService.delete(userEmailInSession, contactId)

    return res.status(200).json({ message: "Contact update success!" })
}
