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
            id: "",
            name: "Credentials",
            pages: {
                signIn: "/auth/login",
            },
            async authorize(credentials, req) {
                console.log(credentials)
                console.log(req)
            },
        }),
    ],
}

export default NextAuth(options)
