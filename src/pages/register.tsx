import RegisterForm from "@containers/RegisterForm"
import Image from "next/image"
const Register = () => (
    <div className="h-screen flex items-center justify-center">
        <RegisterForm />
        <div className="hidden lg:flex lg:w-3/5 lg:items-center lg:justify-center">
            <Image src="/register.png" alt="Register" width={700} height={0} />
        </div>
    </div>
)

export default Register
