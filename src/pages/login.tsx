import Image from "next/image"
import AuthGuardian from "@containers/AuthGuardian"
import LoginForm from "@containers/LoginForm"
import Head from "next/head"

const Login = () => {
    return (
        <>
            <Head>
                <title>ChatNow</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthGuardian>
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
            </AuthGuardian>
        </>
    )
}

export default Login
