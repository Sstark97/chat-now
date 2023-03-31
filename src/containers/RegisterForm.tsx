import { MutableRefObject, useRef } from "react"
import { signIn } from "next-auth/react"
import { getUserDataFrom } from "@lib/utils/user"
import Link from "next/link"
import AuthHeader from "@components/AuthHeader"
import Input from "@components/Input"
import PasswordInput from "@components/PasswordInput"
import Button from "@components/Button"
import AuthGuardian from "@containers/AuthGuardian"

/**
 * Este componente es el encargado de mostrar el formulario de registro
 * @returns component
 * @example <RegisterForm />
 */
const RegisterForm = () => {
    const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>

    const handleClick = async () => {
        const user = getUserDataFrom(ref.current)
        await signIn("credentials", { redirect: true, callbackUrl: "/", ...user })
    }

    return (
        <AuthGuardian>
            <div className="w-[90%] lg:w-2/5">
                <AuthHeader title={"Crea tu cuenta"} />
                <form method="post">
                    <div className="flex flex-col items-center">
                        <div className="w-10/12 lg:w-1/2" ref={ref}>
                            <Input type="text" placeholder="Nombre" name="name" />
                            <Input type="email" placeholder="Correo electrónico" name="email" />
                            <PasswordInput placeholder="Contraseña" />
                            <Button value={"Crear cuenta"} action={handleClick} />
                        </div>
                    </div>
                </form>
                <p className="mt-5 text-sm text-center text-secondary_text lg:text-lg">
                    ¿Ya tienes una cuenta?{" "}
                    <Link href="/login" className="font-bold">
                        Inicia sesión
                    </Link>
                </p>
            </div>
        </AuthGuardian>
    )
}

export default RegisterForm
