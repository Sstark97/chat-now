import { SessionProvider as AuthProvider } from "next-auth/react"
import { ChatProvider } from "@context/ChatProvider"
import { Toaster } from "react-hot-toast"
import type { AppProps } from "next/app"
import "../styles/global.css"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider session={pageProps.session}>
            <ChatProvider>
                <Toaster />
                <Component {...pageProps} />
            </ChatProvider>
        </AuthProvider>
    )
}
