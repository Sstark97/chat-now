import { ContactRepository, ContactRequest } from "@customTypes/domain"

/**
 * @class ContactService
 * @description Servicio para manejar la lógica de negocio de los usuarios
 * @example
 * const contactService = new ContactService(contactRepository)
 */
class ContactService {
    constructor(private readonly contactRepository: ContactRepository) {}

    /**
     * @method create
     * @description Crea un nuevo contacto
     * @param userEmail
     * @param contactInfo
     * @returns {Promise<Contacts | null>}
     * @example
     * const newContact = await contactService.create(userEmail, contactInfo)
     */
    async create(userEmail: string, contactInfo: ContactRequest) {
        return this.contactRepository.create(userEmail, contactInfo)
    }

    /**
     * @method edit
     * @description Edita un contacto
     * @param userEmail
     * @param contactId
     * @param name
     * @returns {Promise<Contacts | null>}
     * @example
     * const contactEdited = await contactService.edit(userEmail, contactId, name)
     */
    async edit(userEmail: string, contactId: string, name: string) {
        return this.contactRepository.edit(userEmail, contactId, name)
    }

    /**
     * @method delete
     * @description Elimina un contacto
     * @param userEmail
     * @param contactId
     * @returns {Promise<boolean>}
     * @example
     * const contactDeleted = await contactService.delete(userEmail, contactId)
     */
    async delete(userEmail: string, contactId: string) {
        return this.contactRepository.delete(userEmail, contactId)
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
