import { NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import type { ContactRequest } from "@customTypes/request"
import type { Contacts } from "@customTypes/domain"
import { ContactFactory } from "@lib/factories/ContactFactory"

const contactService = ContactFactory.createContactService()

/**
 * @description Manejador de la ruta /api/contacts/add
 * @param req {UserRequest}
 * @param res {NextApiResponse<Contacts[]>}
 * @returns {Promise<void>}
 */
export default async function handler(req: ContactRequest, res: NextApiResponse<Contacts[]>) {
    if (req.method !== "GET") {
        res.status(405).end("Method not allowed")
    }

    const session = await getSession({ req })

    if (!session) {
        return res.status(401).end("Unauthorized")
    }

    const userEmail = session?.user?.email as string

    const contacts = await contactService.getAllFrom(userEmail)

    if (contacts !== null) {
        return res.status(200).json(contacts)
    }
}
