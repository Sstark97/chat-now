import AuthHeader from "@components/AuthHeader"
import Input from "@components/Input"
import PasswordInput from "@components/PasswordInput"
import Button from "@components/Button"
import Link from "next/link"

const RegisterForm = ({ onRegister }: { onRegister(): void }) => {
    return (
        <div className="w-[90%] lg:w-2/5">
            <AuthHeader title={"Crea tu cuenta"} />
            <form>
                <div className="flex flex-col items-center">
                    <div className="w-10/12 lg:w-1/2">
                        <Input type="text" placeholder="Nombre" />
                        <Input type="email" placeholder="Correo electrónico" />
                        <PasswordInput placeholder="Contraseña" />
                        <Button value={"Crear cuenta"} action={onRegister} />
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
