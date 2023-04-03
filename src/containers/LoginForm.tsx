import Link from "next/link"
import AuthHeader from "@components/AuthHeader"
import Button from "@components/Button"
import Input from "@components/Input"
import PasswordInput from "@components/PasswordInput"
import AuthGuardian from "@containers/AuthGuardian"
import AuthProviders from "@containers/AuthProviders"
import { MutableRefObject, useRef } from "react"
import { getUserDataFrom } from "@lib/utils/user"
import { signIn } from "next-auth/react"

/**
 * Este componente es el encargado de mostrar el formulario de inicio de sesión
 * @returns component
 * @example <LoginForm />
 */
const LoginForm = () => {
    const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>

    const handleClick = async () => {
        const user = getUserDataFrom(ref.current)
        await signIn("credentials", { redirect: true, callbackUrl: "/", ...user })
    }

    return (
        <AuthGuardian>
            <div className="w-full md:w-[40%]">
                <AuthHeader title="Bienvenido" />

                <form className="w-full flex flex-col justify-center items-center">
                    <div className="w-7/12">
                        <AuthProviders />
                    </div>
                    <div className="w-7/12 flex flex-col items-center">
                        <div className="w-full" ref={ref}>
                            <Input type="text" placeholder="Escribe tu email" name="email" />
                            <PasswordInput placeholder="Escribe tu contraseña" />
                            <Button value="Iniciar Sesión" action={handleClick} />
                        </div>
                    </div>
                </form>

                <p className="mt-5 text-sm text-center text-secondary_text md:text-lg">
                    ¿Aún no tienes cuenta?{" "}
                    <Link className="font-bold" href="">
                        Regístrate
                    </Link>
                </p>
            </div>
        </AuthGuardian>
    )
}

export default LoginForm
