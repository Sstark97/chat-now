import LoginForm from "@containers/LoginForm"
import Image from "next/image"

const Login = () => {
    return (
        <div className="h-screen flex items-center">
            <LoginForm />
            <div className="md:w-[60%] flex items-center justify-center">
                <Image src="/login.png" alt="LoginImage" width={450} height={0} className="hidden md:block" />
            </div>
        </div>
    )
}

export default Login
