import useChatContext from "@hooks/useChatContext"
import useLogin from "@hooks/useLogin"
import Link from "next/link"
import AuthHeader from "@components/AuthHeader"
import Button from "@components/Button"
import Input from "@components/Input"
import PasswordInput from "@components/PasswordInput"
import Error from "@components/Error"
import AuthProviders from "@containers/AuthProviders"
import { errors } from "@lib/const"

/**
 * Este componente es el encargado de mostrar el formulario de inicio de sesión
 * @returns component
 * @example <LoginForm />
 */
const LoginForm = () => {
    const { ref } = useChatContext()
    const { login, error } = useLogin(ref)

    const handleClick = async () => {
        await login()
    }

    return (
        <div className="w-[90%] lg:w-2/5 flex flex-col justify-center items-center">
            <AuthHeader title="Bienvenido" />

            <form className="w-full flex flex-col justify-center items-center">
                <div className="w-10/12 md:w-6/12">
                    <AuthProviders />
                </div>
                <div className="w-10/12 md:w-6/12 flex flex-col items-center">
                    {error ? <Error message={error} /> : null}
                    <div className="w-full" ref={ref}>
                        <Input className="w-full mt-5" type="text" placeholder="Escribe tu email" name="email" errorManager={errors.email} />
                        <PasswordInput className="w-full mt-5" placeholder="Escribe tu contraseña" validate />
                        <Button value="Iniciar Sesión" action={handleClick} />
                    </div>
                </div>
            </form>

            <p className="mt-5 text-sm text-center text-secondary_text md:text-lg">
                ¿Aún no tienes cuenta?{" "}
                <Link className="font-bold" href="/register">
                    Regístrate
                </Link>
            </p>
        </div>
    )
}

export default LoginForm
