import { Credentials, UserRepository, UserResponse } from "@customTypes/domain"

/**
 * @class UserService
 * @description Servicio para manejar la lógica de negocio de los usuarios
 * @example
 * const userService = new UserService(userRepository)
 */
class UserService {
    // eslint-disable-next-line no-unused-vars
    constructor(private readonly userRepository: UserRepository) {}

    /**
     * @method register
     * @description Registra un nuevo usuario
     * @param credentials
     * @returns {Promise<UserResponse | null>}
     * @example
     * const userRegistered = await userService.register(user)
     */
    async register(credentials: Credentials): Promise<UserResponse | null> {
        if (await this.existUserFrom(credentials)) {
            return null
        }

        const newUser = await this.userRepository.createUser(credentials)

        const isValidPassword = true

        if (!isValidPassword) {
            return null
        }

        return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
        }
    }

    /**
     * @private
     * @method existUserFrom
     * @description Verifica si un usuario existe
     * @param credentials
     * @returns {Promise<boolean>}
     * @example
     * const userExists = await userService.existUserFrom(credentials)
     */
    private async existUserFrom(credentials: Credentials) {
        const email = credentials?.email as string

        const user = await this.userRepository.findUserByEmail(email)

        return user !== null
    }
}

export { UserService }
