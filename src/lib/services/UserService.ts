import { Credentials, UserLoginResponse, UserRepository, UserResponse } from "@customTypes/domain"
import { UserRequest } from "@customTypes/request"
import bcrypt from "bcrypt"
import { errors } from "@lib/const"

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

        return {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
        }
    }

    /**
     * @method login
     * @description Inicia sesión de un usuario
     * @param credentials
     * @returns {Promise<UserResponse | null | undefined>}
     * @example
     * const userLogged = await userService.login(credentials)
     */
    async login(credentials: Credentials): Promise<UserResponse | null | undefined> {
        if (!(await this.existUserFrom(credentials))) {
            return null
        }

        const user = (await this.userRepository.findUserByEmail(credentials?.email as string)) as UserLoginResponse
        const password = credentials?.password as string
        const userPassword = user?.password as string

        if (await bcrypt.compare(password, userPassword)) {
            return {
                id: user.id,
                email: user.email,
                name: user.name,
            }
        }

        return null
    }

    /**
     * @method validateUserFrom
     * @description Valida los datos de un usuario
     * @param password
     * @returns {boolean}
     * @example
     * const userIsValid = userService.validateUserFrom(password)
     */
    validateUserFrom(password: string) {
        return errors.strictPassword.validate(password)
    }

    /**
     * @method getUserFrom
     * @description Obtiene los datos de un usuario
     * @param req
     * @returns {Promise<Credentials>}
     * @example
     * const user = await userService.getUserFrom(req)
     */
    async getUserFrom(req: UserRequest) {
        const { name, email, password } = req.body

        return { name, email, password }
    }

    /**
     * @method getUserWithEncryptedPasswordFrom
     * @description Obtiene los datos de un usuario y hashea su contraseña
     * @param req
     * @returns {Promise<Credentials>}
     * @example
     * const user = await userService.getUserWithHassedPashFrom(req)
     */
    async getUserWithEncryptedPasswordFrom(req: UserRequest) {
        const user = await this.getUserFrom(req)

        const hashPassword = await bcrypt.hash(user.password, 10)

        return { ...user, password: hashPassword }
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
