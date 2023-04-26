import type { AppProps } from "next/app"
import { SessionProvider as AuthProvider } from "next-auth/react"
import { ChatProvider } from "@context/ChatProvider"
import { RealTimeProvider } from "@context/RealTimeProvider"
import "../styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider session={pageProps.session}>
            <ChatProvider>
                <RealTimeProvider>
                    <Component {...pageProps} />
                </RealTimeProvider>
            </ChatProvider>
        </AuthProvider>
    )
}
