import useChatContext from "@hooks/useChatContext"
import useLogin from "@hooks/useLogin"
import Link from "next/link"
import AuthHeader from "@components/AuthHeader"
import Button from "@components/Button"
import Input from "@components/Input"
import PasswordInput from "@components/PasswordInput"
import Error from "@components/Error"
import AuthProviders from "@containers/AuthProviders"
import { errors } from "@lib/constants/validations"
import { AUTH_BUTTONS, INPUT_LOGIN_PLACEHOLDER } from "@lib/constants/authForms"

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
        <div className="w-full md:w-[40%]">
            <AuthHeader title="Bienvenido" />

            <form className="w-full flex flex-col justify-center items-center">
                <div className="w-7/12">
                    <AuthProviders />
                </div>
                <div className="w-7/12 flex flex-col items-center">
                    {error ? <Error message={error} /> : null}
                    <div className="w-full" ref={ref}>
                        <Input type="text" placeholder={INPUT_LOGIN_PLACEHOLDER.EMAIL} name="email" errorManager={errors.email} />
                        <PasswordInput placeholder={INPUT_LOGIN_PLACEHOLDER.PASSWORD} validate />
                        <Button value={AUTH_BUTTONS.LOGIN} action={handleClick} />
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
