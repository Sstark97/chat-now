import Image from "next/image"
import Head from "next/head"
import LoginForm from "@containers/LoginForm"
import { getServerSession } from "next-auth/next"
import authConfig from "@pages/api/auth/[...nextauth]"
import type { GetServerSidePropsContext } from "next"
import type { GeneralHeaderProps } from "@customTypes/global"


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
            title: "Login",
            description: "Inicia sesión en tu cuenta de ChatApp",
        },
    }
}

const Login = ({ title, description }: GeneralHeaderProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <div className="h-screen flex items-center justify-center">
                <LoginForm />
                <div className="md:w-[60%] flex items-center justify-center">
                    <Image
                        src="/login.png"
                        alt="LoginImage"
                        width={450}
                        height={0}
                        className="hidden md:block"
                    />
                </div>
            </div>
        </>
    )
}

export default Login
