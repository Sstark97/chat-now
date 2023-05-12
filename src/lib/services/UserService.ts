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
import { Status } from "@prisma/client"

/**
 * @class UserService
 * @description Servicio para manejar la lógica de negocio de los usuarios
 */
class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    /**
     * @method register
     * @description Registra un nuevo usuario
     * @param credentials
     * @returns {Promise<UserResponse | null>}
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

    /**
     * @method existUserFrom
     * @description Verifica si un usuario existe
     * @param user
     * @returns {Promise<boolean>}
     */
    async edit(user: UserEdit) {
        if (user.password && user.password !== "") {
            user.password = await bcrypt.hash(user.password as string, 10)
        }
        return await this.userRepository.edit(user)
    }

    /**
     * @method existUserFrom
     * @description Verifica si un usuario existe
     * @param email
     * @param status
     * @returns {Promise<boolean>}
     */
    async changeStatus(email: string, status: Status) {
        return await this.userRepository.changeStatus(email, status)
    }

    /**
     * @method existUserFrom
     * @description Verifica si un usuario existe
     * @param email
     * @returns {Promise<boolean>}
     */
    async delete(email: string) {
        return await this.userRepository.delete(email)
    }

    /**
     * @method existUserFrom
     * @description Verifica si la contraseña es correcta
     * @param email
     * @param password
     * @returns {Promise<boolean>}
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
     */
    validateUserFrom(password: string) {
        return errors.security.validate(password)
    }

    /**
     * @method getUserFrom
     * @description Obtiene los datos de un usuario
     * @param req
     * @returns {Promise<Credentials>}
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
     */
    async existUserFromID(id: string) {
        const user = await this.userRepository.findByID(id)

        return user !== null
    }
}

export { UserService }
