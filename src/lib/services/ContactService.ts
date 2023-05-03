import { ContactRepository, ContactRequest } from "@customTypes/domain"

/**
 * @class ContactService
 * @description Servicio para manejar la lógica de negocio de los usuarios
 * @example
 * const contactService = new ContactService(contactRepository)
 */
class ContactService {
    constructor(private readonly contactRepository: ContactRepository) {}

    async create(userEmail: string, contactInfo: ContactRequest) {
        return this.contactRepository.create(userEmail, contactInfo)
    }

    async edit(userEmail: string, contactEmail: string, name: string) {
        return this.contactRepository.edit(userEmail, contactEmail, name)
    }

    /**
     * @private
     * @method isTheContactAddedBy
     * @description Verifica si el contacto está agregado
     * @param email
     * @param contactEmail
     * @returns {Promise<boolean>}
     * @example
     * const contactIsAdded = await contactService.isTheContactAddedBy(email)
     */
    async isAddedBy(email: string, contactEmail: string) {
        return await this.contactRepository.existFrom(email, contactEmail)
    }

    /**
     * @method getContactsFrom
     * @description Obtiene los contactos de un usuario
     * @param email
     * @returns {Promise<Contacts[]>}
     * @example
     * const contacts = await contactService.getContactsFrom(email)
     */
    async getAllFrom(email: string) {
        return this.contactRepository.getAllFrom(email)
    }
}

export { ContactService }
