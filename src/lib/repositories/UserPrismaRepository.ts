import { PrismaClient, User } from "@prisma/client"
import { UserRepository, Credentials, ContactRequest } from "@customTypes/domain"

/**
 * @class UserPrismaRepository
 * @description Repositorio para manejar la lógica de persistencia de los usuarios
 * con Prisma
 * @example
 * const userPrismaRepository = new UserPrismaRepository()
 */
class UserPrismaRepository implements UserRepository {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }

    /**
     * @method findUserByEmail
     * @description Busca un usuario por su email
     * @param email
     * @returns {Promise<User | null>}
     * @example
     * const user = await userPrismaRepository.findUserByEmail(email)
     */
    findUserByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email,
            },
        })
    }

    /**
     * @method createUser
     * @description Crea un nuevo usuario
     * @param credentials
     * @returns {Promise<User>}
     * @example
     * const newUser = await userPrismaRepository.createUser(credentials)
     */
    createUser(credentials: Credentials) {
        return this.prisma.user.create({
            data: {
                ...credentials,
            },
        })
    }

    async addContact(userEmail: string, contactInfo: ContactRequest) {
        const user = (await this.findUserByEmail(userEmail)) as User
        const contact = (await this.findUserByEmail(contactInfo.email)) as User

        return this.prisma.contact.create({
            data: {
                user_id: user.id,
                contact_id: contact.id,
                name: contactInfo.name,
            },
        })
    }

    /**
     * @method existUserFrom
     * @description Verifica si existe un contacto está agregado a un usuario
     * @param userEmail
     * @param contactEmail
     * @returns {Promise<boolean>}
     * @example
     * const contactExists = await userPrismaRepository.existContactFrom(userEmail, contactEmail)
     */
    async existContactFrom(userEmail: string, contactEmail: string) {
        const user = (await this.findUserByEmail(userEmail)) as User
        const contact = (await this.findUserByEmail(contactEmail)) as User

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
}

export { UserPrismaRepository }
