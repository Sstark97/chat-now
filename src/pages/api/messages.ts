import { NextApiResponse } from "next"
import { ChatFactory } from "@lib/factories/ChatFactory"
import type { MessageRequest } from "@customTypes/request"
import type { Message } from "@prisma/client"

const chatService = ChatFactory.createChatService()

/**
 * @description Manejador de la ruta /api/contacts/add
 * @param req {UserRequest}
 * @param res {NextApiResponse<Contacts[]>}
 * @returns {Promise<void>}
 */
export default async function handler(req: MessageRequest, res: NextApiResponse<Message[]>) {
    if (req.method !== "GET") {
        res.status(405).end("Method not allowed")
    }

    const { userId, contactId } = req.query

    const messages = await chatService.getMessages(userId, contactId)

    if (messages !== null) {
        return res.status(200).json(messages)
    }
}
