import Image from "next/image"
import AuthGuardian from "@containers/AuthGuardian"
import RegisterForm from "@containers/RegisterForm"

const Register = () => (
    <AuthGuardian>
        <div className="h-screen flex items-center justify-center">
            <RegisterForm />
            <div className="hidden lg:flex lg:w-3/5 lg:items-center lg:justify-center">
                <Image src="/register.png" alt="Register" width={700} height={0} />
            </div>
        </div>
    </AuthGuardian>
)

export default Register
