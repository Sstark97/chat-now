import { ChatRepository, MessageSocket } from "@customTypes/domain"

/**
 * @class ChatService
 * @description Servicio para manejar la lógica de persistencia de los chats
 * 
 */
class ChatService {
    constructor(private readonly chatRepository: ChatRepository) {}

    /**
     * @method sendMessage
     * @description Envia un mensaje
     * @param userId
     * @param contactId
     * @param message
     * @returns {Promise<Message>}
     */
    sendMessage(userId: string, contactId: string, message: string) {
        return this.chatRepository.sendMessage(userId, contactId, message)
    }

    /**
     * @method getChatId
     * @description Busca un chat por los ids de los usuarios
     * @param userId
     * @param contactId
     * @returns {Promise<Chat | null>}
     */
    async getMessages(userId: string, contactId: string) {
        const chat = await this.chatRepository.getChatId(userId, contactId)
        const chatId = chat?.chat_id

        return chatId ? this.chatRepository.getMessages(chatId) : []
    }

    /**
     * @method getAllWithContact
     * @description Busca todos los chats con sus respectivos contactos
     * @param userId
     * @returns {Promise<ChatWithContact[]>}
     */
    async getAllWithContact(userId: string) {
        const chats = await this.chatRepository.getAllWithContact(userId)
        return await Promise.all(
            chats.map(async (chat) => {
                const { user } = chat.ChatUsers[0]
                const { id, email, image, status } = user
                const name = await this.chatRepository.getContactName(id)
                const lastMessage = await this.chatRepository.getLastMessage(chat.id)
                const { text, date, author_id } = lastMessage as MessageSocket

                return {
                    chat_id: chat.id,
                    id,
                    name: name ?? email,
                    image,
                    status,
                    time: date,
                    message: text,
                    author_id,
                }
            })
        )
    }

    /**
     * @method create
     * @description Crea un chat
     * @param userId
     * @param contactId
     * @returns {Promise<Chat | null>}
     */
    async create(userId: string, contactId: string) {
        const chatInCommon = await this.chatRepository.getChatId(userId, contactId)

        if (!chatInCommon) {
            return this.chatRepository.create(userId, contactId)
        }
    }

    /**
     * @method delete
     * @description Elimina los chats que no tengan usuarios
     * @returns {Promise<void>}
     */
    delete() {
        this.chatRepository.delete()
    }
}

export default ChatService
