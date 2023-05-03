import * as process from "process"
import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { changeFrom } from "@lib/utils/fetcher"
import type { NextAuthOptions } from "next-auth"
import { API } from "@lib/constants/links"

const prisma = new PrismaClient()

/**
 * @description Configuración de NextAuth
 * @type {NextAuthOptions}
 */
const options: NextAuthOptions = {
    theme: {
        colorScheme: "light",
    },
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: "login",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "jsmith@gmail.com",
                },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const user = await changeFrom(
                    credentials,
                    `${process.env.NEXTAUTH_URL}${API.LOGIN}`,
                    "POST"
                )

                if (user) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    }
                }

                return null
            },
        }),
        Github({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.name = user.name
                token.email = user.email
            }

            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
            }
            return session
        },
    },
    session: {
        strategy: "jwt",
    },
}

export default NextAuth(options)
