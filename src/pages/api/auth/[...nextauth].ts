import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import Github from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import * as process from "process"

const prisma = new PrismaClient()

const options: NextAuthOptions = {
    theme: {
        colorScheme: "light",
    },
    debug: true,
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                name: {
                    label: "name",
                    type: "text",
                },
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "jsmith@gmail.com",
                },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/user`, {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-type": "application/json" },
                })

                const user = await res.json()

                if (res.ok && user) {
                    return user
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
}

export default NextAuth(options)
