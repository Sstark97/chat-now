import { Credentials, UserRepository } from "@customTypes/domain"

class UserService {
    // eslint-disable-next-line no-unused-vars
    constructor(private readonly userRepository: UserRepository) {}

    async register(credentials: Credentials) {
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
            username: newUser.name,
        }
    }

    private async existUserFrom(credentials: Credentials) {
        const email = credentials?.email as string

        const user = await this.userRepository.findUserByEmail(email)

        return user !== null
    }
}

export { UserService }
