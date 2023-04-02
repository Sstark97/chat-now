import { PrismaClient } from "@prisma/client"
import { UserRepository, Credentials } from "@customTypes/domain"

class UserPrismaRepository implements UserRepository {
    private prisma: PrismaClient
    constructor() {
        this.prisma = new PrismaClient()
    }

    findUserByEmail(email: string) {
        return this.prisma.user.findFirst({
            where: { email },
        })
    }

    createUser(credentials: Credentials) {
        return this.prisma.user.create({
            data: {
                ...credentials,
            },
        })
    }
}

export { UserPrismaRepository }
