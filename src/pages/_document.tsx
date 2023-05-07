import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-primary dark:bg-dark_primary text-black dark:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
