import Head from "next/head"
import { Inter } from "next/font/google"
import Input from "@components/Input";

const inter = Inter({ subsets: ["latin"] })

const Home = () => {
    return (
        <>
            <Head>
                <title>ChatNow</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={inter.className}>
                <h1 className="text-2xl text-center mt-3">Hello World</h1>
                <Input />
            </main>
        </>
    )
}

export default Home
