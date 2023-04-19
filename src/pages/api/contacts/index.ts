import { NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { UserFactory } from "@lib/factories/UserFactory"
import type { ContactRequest } from "@customTypes/request"
import type { ErrorResponse, Contacts } from "@customTypes/domain"

const userService = UserFactory.createUserService()

/**
 * @description Manejador de la ruta /api/contacts/add
 * @param req {UserRequest}
 * @param res {NextApiResponse<UserResponse | ErrorResponse>}
 * @returns {Promise<void>}
 */
export default async function handler(
    req: ContactRequest,
    res: NextApiResponse<Contacts[] | ErrorResponse>
) {
    if (req.method !== "GET") {
        res.status(405).end()
    }

    const session = await getSession({ req })

    if (!session) {
        return res.status(401).end()
    }

    const userEmail = session?.user?.email as string

    const contacts = await userService.getContactsFrom(userEmail)

    if (contacts !== null) {
        return res.status(200).json(contacts)
    }
}
