import Head from "next/head"
import Image from "next/image"
import RegisterForm from "@containers/RegisterForm"
import { getServerSession } from "next-auth/next"
import authConfig from "@pages/api/auth/[...nextauth]"
import type { GetServerSidePropsContext } from "next"

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
            title: "Register",
            description: "Regístrate en ChatNow",
        },
    }
}

const Register = ({ title, description }: { title: string; description: string }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        <div className="h-screen flex items-center justify-center">
            <RegisterForm />
            <div className="hidden lg:flex lg:w-3/5 lg:items-center lg:justify-center">
                <Image src="/register.png" alt="Register" width={700} height={0} />
            </div>
        </div>
    </>
)

export default Register
