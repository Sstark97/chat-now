import {
    Credentials,
    UserEdit,
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
        const newUser = await this.userRepository.create(credentials)

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

        const user = (await this.userRepository.findBy(
            credentials?.email as string
        )) as UserLoginResponse
        const password = credentials?.password as string

        if (await this.isPasswordValid(credentials?.email as string, password)) {
            return {
                id: user.id,
                email: user.email,
                name: user.name,
            }
        }

        return null
    }

    async edit(user: UserEdit) {
        const currentUser = await this.userRepository.findBy(user.email)
        const currentPassword = currentUser?.password as string

        user.password =
            user?.password !== "" ? await bcrypt.hash(user.password as string, 10) : currentPassword
        return await this.userRepository.edit(user)
    }

    async delete(email: string) {
        return await this.userRepository.delete(email)
    }

    /**
     * @method existUserFrom
     * @description Verifica si la contraseña es correcta
     * @param email
     * @param password
     */
    async isPasswordValid(email: string, password: string) {
        const user = (await this.userRepository.findBy(email)) as UserLoginResponse

        return await bcrypt.compare(password, user.password as string)
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
     * @method existUserFrom
     * @description Verifica si un usuario existe
     * @param email
     * @returns {Promise<boolean>}
     * @example
     * const userExists = await userService.existUserFrom(email)
     */
    async existUserFrom(email: string) {
        const user = await this.userRepository.findBy(email)

        return user !== null
    }

    /**
     * @method existUserFromID
     * @description Verifica si un usuario existe
     * @param id
     * @returns {Promise<boolean>}
     * @example
     * const userExists = await userService.existUserFromID(id)
     */
    async existUserFromID(id: string) {
        const user = await this.userRepository.findByID(id)

        return user !== null
    }
}

export { UserService }
