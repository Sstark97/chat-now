import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import Github from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Google from "next-auth/providers/google"

const prisma = new PrismaClient()

const options: NextAuthOptions = {
    theme: {
        colorScheme: "light",
    },
    debug: true,
    adapter: PrismaAdapter(prisma),
    providers: [
        Github({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        }),
    ],
}

export default NextAuth(options)
