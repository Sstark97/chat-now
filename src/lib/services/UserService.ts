import { UserRepository, Credentials } from "@customTypes/domain"

class UserService {
    // eslint-disable-next-line no-unused-vars
    constructor(private readonly userRepository: UserRepository) {}

    async register(credentials: Credentials) {
        const email = credentials?.email as string

        const user = await this.userRepository.findUserByEmail(email)
        if (user) {
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
            username: newUser.name,
        }
    }
}

export { UserService }
