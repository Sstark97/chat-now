import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import AuthButton from "@components/AuthButton"

/**
 * Este componente se encarga de crear el contendio de los botones de registro de las diferentes plataformas
 * @returns component
 * @example <AuthProviders />
 */
const AuthProviders = () => {
    return (
        <>
            <div className="w-full mb-5">
                <AuthButton credential="github">
                    <BsGithub className="mr-4 text-2xl text-black" /> Regístrate con GitHub
                </AuthButton>
                <AuthButton credential="google">
                    <FcGoogle className="mr-4 text-2xl" /> Regístrate con Google
                </AuthButton>
            </div>

            <div className="w-full text-center">
                <div className="w-full flex items-center justify-between">
                    <div className="w-5/12 h-[.08rem] bg-secondary bg-opacity-50"></div>
                    <p className="text-secondary">O</p>
                    <div className="w-5/12 h-[.08rem] bg-secondary bg-opacity-50"></div>
                </div>

                <p className="text-secondary">Por favor, inserte sus datos</p>
            </div>
        </>
    )
}

export default AuthProviders