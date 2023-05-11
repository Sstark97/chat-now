import { ChatRepository } from "@customTypes/domain"
import { PrismaClient } from "@prisma/client"

/**
 * @class ChatPrismaRepository
 * @description Repositorio para manejar la lógica de persistencia de los chats con Prisma
 * @example
 * const chatPrismaRepository = new ChatPrismaRepository()
 */
class ChatPrismaRepository implements ChatRepository {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }

    /**
     * @method getChatId
     * @description Busca un chat por los ids de los usuarios
     * @param userId
     * @param contactId
     * @param message
     * @returns {Promise<Chat | null>}
     */
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

    /**
     * @method getChatId
     * @description Busca un chat por los ids de los usuarios
     * @param userId
     * @param contactId
     * @returns {Promise<Chat | null>}
     */
    create(userId: string, contactId: string) {
        return this.prisma.chat.create({
            data: {
                ChatUsers: {
                    createMany: {
                        data: [{ user_id: userId }, { user_id: contactId }],
                    },
                },
            },
        })
    }

    /**
     * @method delete
     * @description Elimina los chats que no tengan usuarios
     * @returns {Promise<void>}
     */
    async delete() {
        await this.prisma.chat.deleteMany({
            where: { NOT: { ChatUsers: { some: {} } } },
        })
    }

    /**
     * @method getMessages
     * @description Busca los mensajes de un chat
     * @param chatId
     * @returns {Promise<Message[]>}
     */
    getMessages(chatId: number) {
        return this.prisma.message.findMany({
            where: { chat_id: chatId },
        })
    }

    /**
     * @method getLastMessage
     * @description Busca el último mensaje de un chat
     * @param chatId
     * @returns {Promise<Message | null>}
     */
    getLastMessage(chatId: number) {
        return this.prisma.message.findFirst({
            where: { chat_id: chatId },
            orderBy: { date: "desc" },
            select: { text: true, date: true, author_id: true },
        })
    }

    /**
     * @method getAllWithContact
     * @description Busca todos los chats de un usuario con sus contactos
     * @param userId
     * @returns {Promise<Chat[]>}
     */
    getAllWithContact(userId: string) {
        return this.prisma.chat.findMany({
            where: {
                ChatUsers: {
                    some: {
                        user_id: userId,
                    },
                },
                messages: {
                    some: {},
                },
            },
            include: {
                ChatUsers: {
                    where: {
                        NOT: {
                            user_id: userId,
                        },
                    },
                    select: {
                        user: true,
                    },
                },
            },
        })
    }

    /**
     * @method getContactName
     * @description Busca el nombre de un contacto
     * @param contactId
     * @returns {Promise<string>}
     */
    async getContactName(contactId: string) {
        const contact = await this.prisma.contact.findFirst({
            where: { contact_id: contactId },
            select: { name: true },
        })
        return contact?.name as string
    }

    /**
     * @method getChatId
     * @description Busca un chat por los ids de los usuarios
     * @param userId
     * @param contactId
     * @returns {Promise<Chat | null>}
     */
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
}

export default ChatPrismaRepository
