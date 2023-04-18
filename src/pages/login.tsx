import Image from "next/image"
import AuthGuardian from "@containers/AuthGuardian"
import LoginForm from "@containers/LoginForm"

const Login = () => {
    return (
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
    )
}

export default Login
