import { PrismaClient, Status } from "@prisma/client"
import { Credentials, UserEdit, UserRepository } from "@customTypes/domain"

/**
 * @class UserPrismaRepository
 * @description Repositorio para manejar la lógica de persistencia de los usuarios con Prisma
 * @example
 * const userPrismaRepository = new UserPrismaRepository()
 */
class UserPrismaRepository implements UserRepository {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }

    /**
     * @method findBy
     * @description Busca un usuario por su email
     * @param email
     * @returns {Promise<User | null>}
     */
    findBy(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email,
            },
        })
    }

    /**
     * @method findByID
     * @param id
     * @returns {Promise<User | null>}
     */
    findByID(id: string) {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        })
    }

    /**
     * @method create
     * @description Crea un nuevo usuario
     * @param credentials
     * @returns {Promise<User>}
     */
    create(credentials: Credentials) {
        return this.prisma.user.create({
            data: {
                ...credentials,
            },
        })
    }

    /**
     * @method edit
     * @description Edita un usuario
     * @param userEdit
     * @returns {Promise<User>}
     */
    async edit(userEdit: UserEdit) {
        return this.prisma.user.update({
            where: {
                email: userEdit.email,
            },
            data: {
                name: userEdit.name,
                password: userEdit.password,
            },
        })
    }

    /**
     * @method changeStatus
     * @description Cambia el estado de un usuario
     * @param email
     * @param status
     * @returns {Promise<User>}
     */
    async changeStatus(email: string, status: Status) {
        return this.prisma.user.update({
            where: {
                email,
            },
            data: {
                status,
            },
        })
    }

    /**
     * @method delete
     * @description Elimina un usuario
     * @param email
     * @returns {Promise<User>}
     */
    async delete(email: string) {
        return this.prisma.user.delete({
            where: {
                email,
            },
        })
    }
}

export { UserPrismaRepository }
