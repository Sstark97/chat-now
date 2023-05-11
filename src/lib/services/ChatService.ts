import { ChatRepository } from "@customTypes/domain"

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

    async create(userId: string, contactId: string) {
        const chatInCommon = await this.chatRepository.getChatId(userId, contactId)

        if (!chatInCommon) {
            return this.chatRepository.create(userId, contactId)
        }
    }
}

export default ChatService
