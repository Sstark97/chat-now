import type { AppProps } from "next/app"
import { SessionProvider as AuthProvider } from "next-auth/react"
import { ChatProvider } from "@context/ChatProvider"
import "../styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChatProvider>
            <AuthProvider session={pageProps.session}>
                <Component {...pageProps} />
            </AuthProvider>
        </ChatProvider>
    )
}
