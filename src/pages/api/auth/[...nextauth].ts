import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const options: NextAuthOptions = {
    theme: {
        colorScheme: "light",
    },
    debug: true,
    session: {},
    jwt: {},
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "ChatNow",
            async authorize(credentials, req) {},
        }),
    ],
}

export default NextAuth(options)
