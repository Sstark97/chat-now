import { ContactRepository, ContactRequest } from "@customTypes/domain"
import { PrismaClient, User } from "@prisma/client"

class ContactPrismaRepository implements ContactRepository {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }

    /**
     * @method findUserBy
     * @description Busca un usuario por su email
     * @param email
     * @returns {Promise<User | null>}
     * @example
     * const user = await contactRepository.findUserBy(email)
     */
    findUserBy(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email,
            },
        })
    }

    /**
     * @method create
     * @description Agrega un contacto a un usuario
     * @param userEmail
     * @param contactInfo
     * @returns {Promise<Contact>}
     * @example
     * const newContact = await contactRepository.addContact(userEmail, contactInfo)
     */
    async create(userEmail: string, contactInfo: ContactRequest) {
        const user = (await this.findUserBy(userEmail)) as User
        const contact = (await this.findUserBy(contactInfo.email)) as User

        return this.prisma.contact.create({
            data: {
                user_id: user.id,
                contact_id: contact.id,
                name: contactInfo.name,
            },
        })
    }

    /**
     * @method edit
     * @param userEmail
     * @param contactId
     * @param name
     * @returns {Promise<void>}
     * @example
     * await contactRepository.edit(userEmail, contactId, name)
     */
    async edit(userEmail: string, contactId: string, name: string) {
        const user = (await this.findUserBy(userEmail)) as User

        await this.prisma.contact.update({
            where: {
                user_id_contact_id: {
                    user_id: user.id,
                    contact_id: contactId,
                },
            },
            data: {
                name,
            },
        })
    }

    /**
     * @method existFrom
     * @description Verifica si existe un contacto está agregado a un usuario
     * @param userEmail
     * @param contactEmail
     * @returns {Promise<boolean>}
     * @example
     * const contactExists = await contactRepository.existContactFrom(userEmail, contactEmail)
     */
    async existFrom(userEmail: string, contactEmail: string) {
        const user = (await this.findUserBy(userEmail)) as User
        const contact = (await this.findUserBy(contactEmail)) as User

        if (!user || !contact) {
            return false
        }

        const contactExists = await this.prisma.contact.findFirst({
            where: {
                user_id: user.id,
                contact_id: contact.id,
            },
        })

        return !!contactExists
    }

    /**
     * @method getAllFrom
     * @description Obtiene todos los contactos de un usuario
     * @param userEmail
     * @returns {Promise<boolean>}
     * @example
     * const userExists = await contactRepository.existUserFrom(email)
     */
    async getAllFrom(userEmail: string) {
        const user = (await this.findUserBy(userEmail)) as User

        const allContacts = await this.prisma.contact.findMany({
            where: {
                user_id: user.id,
            },
            include: {
                Contact: true,
            },
        })

        return allContacts.map((contact) => ({
            id: contact.Contact.id,
            name: contact.name,
            email: contact.Contact.email,
            image: contact.Contact.image,
            status: contact.Contact.status,
        }))
    }
}

export { ContactPrismaRepository }
