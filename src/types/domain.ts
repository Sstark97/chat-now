import { User } from "@prisma/client"

type Credentials = Record<"name" | "email" | "password", string> | undefined

interface UserRepository {
    findUserByEmail(email: string): Promise<User | null>

    createUser(credentials: Credentials): Promise<User>
}

export type { Credentials, User, UserRepository }
