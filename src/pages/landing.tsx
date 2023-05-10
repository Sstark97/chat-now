import Head from "next/head"
import Image from "next/image"
import Features from "@containers/Features"
import ExampleChats from "@components/ExampleChats"
import Footer from "@containers/Footer"
import Hero from "@components/Hero"
import { getServerSession } from "next-auth/next"
import authConfig from "@pages/api/auth/[...nextauth]"
import type { GetServerSidePropsContext } from "next"
import type { LandingHeaderProps } from "@customTypes/global"

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const session = await getServerSession(context.req, context.res, authConfig)

    if (session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }
    return {
        props: {
            title: "ChatNow",
            description: "ChatNow es una aplicación de mensajería instantánea",
            keywords: "chat, mensajería, instantánea, chatnow",
        },
    }
}

const Landing = ({ title, description, keywords }: LandingHeaderProps) => {
    return (
        <>
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
        </>
    )
}

export default Landing
