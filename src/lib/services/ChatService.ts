import { ChatRepository, MessageSocket } from "@customTypes/domain"

class ChatService {
    constructor(private readonly chatRepository: ChatRepository) {}

    sendMessage(userId: string, contactId: string, message: string) {
        return this.chatRepository.sendMessage(userId, contactId, message)
    }

    async getMessages(userId: string, contactId: string) {
        const chat = await this.chatRepository.getChatId(userId, contactId)
        const chatId = chat?.chat_id as number

        return this.chatRepository.getMessages(chatId)
    }

    async getAllWithContact(userId: string) {
        const chats = await this.chatRepository.getAllWithContact(userId)
        return await Promise.all(
            chats.map(async (chat) => {
                const { user } = chat.ChatUsers[0]
                const { id, image, status } = user
                const name = await this.chatRepository.getContactName(id)
                const lastMessage = await this.chatRepository.getLastMessage(chat.id)
                const { text, date, author_id } = lastMessage as MessageSocket

                return {
                    chat_id: chat.id,
                    id,
                    name,
                    image,
                    status,
                    time: date,
                    message: text,
                    author_id,
                }
            })
        )
    }

    async create(userId: string, contactId: string) {
        const chatInCommon = await this.chatRepository.getChatId(userId, contactId)

        if (!chatInCommon) {
            return this.chatRepository.create(userId, contactId)
        }
    }
}

export default ChatService
