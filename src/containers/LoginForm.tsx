import AuthHeader from "@components/AuthHeader"
import Button from "@components/Button"
import Input from "@components/Input"
import PasswordInput from "@components/PasswordInput"
import Link from "next/link"

const LoginForm = () => (
    <div className="w-full md:w-[40%]">
        <AuthHeader title="Bienvenido" />

        <form className="w-10/12 md:w-2/4 mx-auto">
            <Input type="text" placeholder="Escribe tu email" />
            <PasswordInput placeholder="Escribe tu contraseña" />
            <Button value="Iniciar Sesión" />
        </form>

        <p className="mt-5 text-sm text-center text-secondary_text md:text-lg">
            ¿Aún no tienes cuenta?{" "}
            <Link className="font-bold" href="">
                Regístrate
            </Link>
        </p>
    </div>
)

export default LoginForm
