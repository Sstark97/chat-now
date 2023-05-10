import { ChatRepository } from "@customTypes/domain"

class ChatService {
    constructor(private readonly chatRepository: ChatRepository) {}

    async sendMessage(userId: string, contactId: string, message: string) {
        return this.chatRepository.sendMessage(userId, contactId, message)
    }

    async create(userId: string, contactId: string) {
        const chatInCommon = await this.chatRepository.getChatId(userId, contactId)

        if (!chatInCommon) {
            return this.chatRepository.create(userId, contactId)
        }
    }
}

export default ChatService
