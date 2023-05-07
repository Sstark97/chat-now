import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import AuthButton from "@components/AuthButton"

// TODO: Refactorizar para que sea un solo componente y no haga un flash de loading
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
                    <BsGithub className="mr-4 text-2xl text-black dark:text-white" /> Regístrate con
                    GitHub
                </AuthButton>
                <AuthButton credential="google">
                    <FcGoogle className="mr-4 text-2xl" /> Regístrate con Google
                </AuthButton>
            </div>

            <div className="w-full text-center">
                <div className="w-full flex items-center justify-between">
                    <div className="w-5/12 h-[.08rem] bg-secondary dark:bg-dark_secondary bg-opacity-50"></div>
                    <p className="text-secondary dark:text-dark_secondary">O</p>
                    <div className="w-5/12 h-[.08rem] bg-secondary dark:bg-dark_secondary bg-opacity-50"></div>
                </div>

                <p className="text-secondary dark:text-dark_secondary">
                    Por favor, inserte sus datos
                </p>
            </div>
        </>
    )
}

export default AuthProviders
