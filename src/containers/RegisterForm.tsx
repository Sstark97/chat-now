import useChatContext from "@hooks/useChatContext"
import useRegister from "@hooks/useRegister"
import Link from "next/link"
import AuthHeader from "@components/AuthHeader"
import Input from "@components/Input"
import PasswordInput from "@components/PasswordInput"
import Button from "@components/Button"
import Error from "@components/Error"
import AuthProviders from "@containers/AuthProviders"
import { errors } from "@lib/const"

/**
 * Este componente es el encargado de mostrar el formulario de registro
 * @returns component
 * @example <RegisterForm />
 */
const RegisterForm = () => {
    const { ref } = useChatContext()
    const { register, error } = useRegister(ref)

    const handleClickInRegister = async () => {
        await register()
    }

    return (
        <div className="w-[90%] lg:w-2/5">
            <AuthHeader title={"Crea tu cuenta"} />
            <form method="post" className="w-full flex flex-col justify-center items-center">
                <div className="w-10/12 md:w-6/12">
                    <AuthProviders />
                </div>
                <div className="w-10/12 md:w-6/12 flex flex-col items-center">
                    {error ? <Error message={error} /> : null}
                    <div className="w-full" ref={ref}>
                        <Input className="w-full mt-5" type="text" placeholder="Nombre" name="name" errorManager={errors.name} />
                        <Input className="w-full mt-5" type="email" placeholder="Correo electrónico" name="email" errorManager={errors.email} />
                        <PasswordInput className="w-full mt-5" placeholder="Contraseña" location="register" validate />
                        <Button value={"Crear cuenta"} action={handleClickInRegister} />
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
    )
}

export default RegisterForm
