import {
    ContactRequest,
    Credentials,
    UserLoginResponse,
    UserRepository,
    UserResponse,
} from "@customTypes/domain"
import { UserRequest } from "@customTypes/request"
import bcrypt from "bcrypt"
import { errors } from "@lib/constants/validations"

/**
 * @class UserService
 * @description Servicio para manejar la lógica de negocio de los usuarios
 * @example
 * const userService = new UserService(userRepository)
 */
class UserService {
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
        if (!(await this.existUserFrom(credentials?.email as string))) {
            return null
        }

        const user = (await this.userRepository.findUserByEmail(
            credentials?.email as string
        )) as UserLoginResponse
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

    async addContact(userEmail: string, contactInfo: ContactRequest) {
        return this.userRepository.addContact(userEmail, contactInfo)
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
        return errors.security.validate(password)
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
     * @param email
     * @returns {Promise<boolean>}
     * @example
     * const userExists = await userService.existUserFrom(email)
     */
    async existUserFrom(email: string) {
        const user = await this.userRepository.findUserByEmail(email)

        return user !== null
    }

    /**
     * @private
     * @method isTheContactAddedBy
     * @description Verifica si el contacto está agregado
     * @param email
     * @param contactEmail
     * @returns {Promise<boolean>}
     * @example
     * const contactIsAdded = await userService.isTheContactAddedBy(email)
     */
    async isTheContactAddedBy(email: string, contactEmail: string) {
        return await this.userRepository.existContactFrom(email, contactEmail)
    }

    async getContactsFrom(email: string) {
        return this.userRepository.getContactsFrom(email)
    }
}

export { UserService }
