import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type Credentials = Record<"name" | "email" | "password", string> | undefined

const register = async (credentials: Credentials) => {
    const user = await prisma.user.findFirst({
        where: { email: credentials?.email },
    })

    if (user) {
        return null
    }

    const newUser = await prisma.user.create({
        data: {
            ...credentials,
        },
    })

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

export { register }
