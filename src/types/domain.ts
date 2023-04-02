import { User } from "@prisma/client"

type Credentials = Record<"name" | "email" | "password", string> | undefined

interface UserRepository {
    // eslint-disable-next-line no-unused-vars
    findUserByEmail(email: string): Promise<User | null>

    // eslint-disable-next-line no-unused-vars
    createUser(credentials: Credentials): Promise<User>
}

export type { Credentials, User, UserRepository }
