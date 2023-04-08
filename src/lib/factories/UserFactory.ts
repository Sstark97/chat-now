import { UserPrismaRepository } from "@lib/repositories/UserPrismaRepository"
import { UserService } from "@lib/services/UserService"

/**
 * @class UserFactory
 * @description Factoría para crear instancias de UserService
 */
class UserFactory {
    /**
     * @static
     * @method createUserService
     * @description Crea una instancia de UserService
     * @returns {UserService}
     * @example
     * const userService = UserFactory.createUserService()
     */
    static createUserService() {
        const userPrismaRepository = new UserPrismaRepository()
        return new UserService(userPrismaRepository)
    }
}

export { UserFactory }
