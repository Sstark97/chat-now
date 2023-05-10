import Head from "next/head"
import Image from "next/image"
import Features from "@containers/Features"
import ExampleChats from "@components/ExampleChats"
import Footer from "@containers/Footer"
import Hero from "@components/Hero"
import AuthGuardian from "@containers/AuthGuardian"
import type { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            title: "ChatNow",
            description: "ChatNow es una aplicación de mensajería instantánea",
            keywords: "chat, mensajería, instantánea, chatnow",
        },
    }
}

const Landing = ({
    title,
    description,
    keywords,
}: {
    title: string
    description: string
    keywords: string
}) => {
    return (
        <AuthGuardian>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={250}
                    height={500}
                    className="w-[3rem] lg:w-[4rem] ml-5 mt-3 rounded-xl object-cover"
                />

                <Hero />
                <ExampleChats />
                <Features />
                <Footer />
            </>
        </AuthGuardian>
    )
}

export default Landing
