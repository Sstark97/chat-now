import { UserPrismaRepository } from "@lib/repositories/UserPrismaRepository"
import { UserService } from "@lib/services/UserService"

class UserFactory {
    static createUserService() {
        const userPrismaRepository = new UserPrismaRepository()
        return new UserService(userPrismaRepository)
    }
}

export { UserFactory }
