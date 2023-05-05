import { ChatRepository } from "@customTypes/domain"

class ChatService {
    constructor(private readonly chatRepository: ChatRepository) {}

    async sendMessage(userId: string, contactId: string, message: string) {
        return this.chatRepository.sendMessage(userId, contactId, message)
    }
}

export default ChatService
