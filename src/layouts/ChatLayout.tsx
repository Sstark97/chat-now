import Head from "next/head"
import LoggedGuardian from "@containers/LoggedGuardian"
import { Inter } from "next/font/google"
import type { ChildrenProps } from "@customTypes/global"

const inter = Inter({ subsets: ["latin"] })

/**
 * Layout para las paginas del chat
 * @param children {ChildrenProps}
 * @returns component
 * @example <ChatLayout>{children}</ChatLayout>
 */
const ChatLayout = ({ children }: ChildrenProps) => (
    <LoggedGuardian>
        <Head>
            <title>ChatNow</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={inter.className}>{children}</main>
    </LoggedGuardian>
)

export default ChatLayout
