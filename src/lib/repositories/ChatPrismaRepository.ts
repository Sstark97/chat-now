import { ChatRepository } from "@customTypes/domain"
import { PrismaClient } from "@prisma/client"

class ChatPrismaRepository implements ChatRepository {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }

    getChatId(userId: string, contactId: string) {
        return this.prisma.chatUsers.findFirst({
            where: {
                user_id: userId,
                chat: {
                    ChatUsers: { some: { user_id: contactId } },
                },
            },
            select: { chat_id: true },
        })
    }

    async sendMessage(userId: string, contactId: string, message: string) {
        const chat = await this.getChatId(userId, contactId)
        const chatId = chat?.chat_id as number

        return this.prisma.message.create({
            data: {
                chat_id: chatId,
                text: message,
                author_id: userId,
            },
        })
    }
}

export default ChatPrismaRepository
