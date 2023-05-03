import { PrismaClient } from "@prisma/client"
import { UserRepository, Credentials } from "@customTypes/domain"

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
     * @method findBy
     * @description Busca un usuario por su email
     * @param email
     * @returns {Promise<User | null>}
     * @example
     * const user = await userPrismaRepository.findBy(email)
     */
    findBy(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email,
            },
        })
    }

    /**
     * @method create
     * @description Crea un nuevo usuario
     * @param credentials
     * @returns {Promise<User>}
     * @example
     * const newUser = await userPrismaRepository.create(credentials)
     */
    create(credentials: Credentials) {
        return this.prisma.user.create({
            data: {
                ...credentials,
            },
        })
    }
}

export { UserPrismaRepository }
