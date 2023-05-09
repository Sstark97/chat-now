import { ContactPrismaRepository } from "@lib/repositories/ContactPrismaRepository"
import { ContactService } from "@lib/services/ContactService"

/**
 * @class ContactFactory
 * @description Factoría para crear instancias de ContactService
 */
class ContactFactory {
    /**
     * @static
     * @method createContactService
     * @description Crea una instancia de ContactService
     * @returns {ContactService}
     * @example
     * const userService = UserFactory.createContactService()
     */
    static createContactService() {
        const contactPrismaRepository = new ContactPrismaRepository()
        return new ContactService(contactPrismaRepository)
    }
}

export { ContactFactory }
