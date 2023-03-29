import { PrismaClient } from "@prisma/client"
import { RequestInternal } from "next-auth"

const prisma = new PrismaClient()

interface registerAction {
    credentials: Record<"name" | "email" | "password", string> | undefined
    request: Pick<RequestInternal, "query" | "body" | "headers" | "method">
}

const register = async ({ credentials, request }: registerAction) => {
    const user = await prisma.user.findFirst({
        where: { email: credentials?.email },
    })

    if (user) {
        return null
    }

    console.log("goplaaadafasdf")

    const newUser = await prisma.user.create({
        data: {
            ...credentials,
        },
    })

    console.log(newUser)

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
