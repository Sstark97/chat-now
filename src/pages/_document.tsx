import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="application-name" content="ChatNow" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="ChatNow" />
                <meta name="description" content="Fast chat in real time application" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-config" content="/icons/browserconfig.xml" />
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#BC8FCC" />

                <link rel="icon" type="image/png" sizes="32x32" href="/icon-48x48.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icon-72x72.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icon-128x128.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="256x256" href="/icon-256x256.png" />
                <link rel="icon" type="image/png" sizes="256x256" href="/icon-384x384.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="/favicon.ico" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://chat-now-psi.vercel.app" />
                <meta name="twitter:title" content="ChatNow" />
                <meta name="twitter:description" content="Fast chat in real time application" />
                <meta
                    name="twitter:image"
                    content="Fast chat in real time application/icons/icon-192x192.png"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="ChatNow" />
                <meta property="og:description" content="Fast chat in real time application" />
                <meta property="og:site_name" content="ChatNow" />
                <meta property="og:url" content="https://chat-now-psi.vercel.app" />
                <meta
                    property="og:image"
                    content="https://chat-now-psi.vercel.app/icon-192x192.png"
                />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />
            </Head>
            <body className="bg-primary dark:bg-dark_primary text-black dark:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
