import Head from "next/head"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

/**
 * Esta es la página principal de la aplicación
 * @returns component
 */
const Home = () => {
    return (
        <>
            <Head>
                <title>ChatNow the Best</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={inter.className}>
                <h1 className="text-2xl text-center mt-4">ChatNow</h1>
            </main>
        </>
    )
}

export default Home
