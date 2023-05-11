import { NextApiResponse } from "next"
import { ChatFactory } from "@lib/factories/ChatFactory"
import type { ChatRequest } from "@customTypes/request"
import type { Message } from "@prisma/client"

const chatService = ChatFactory.createChatService()

/**
 * @description Manejador de la ruta /api/contacts/add
 * @param req {UserRequest}
 * @param res {NextApiResponse<Contacts[]>}
 * @returns {Promise<void>}
 */
export default async function handler(req: ChatRequest, res: NextApiResponse<Message[]>) {
    if (req.method !== "GET") {
        res.status(405).end("Method not allowed")
    }

    const { userId } = req.query

    const chats = await chatService.getAllWithContact(userId)

    if (chats !== null) {
        return res.status(200).json(chats)
    }
}
