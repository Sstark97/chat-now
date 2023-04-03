import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"

/**
 * AuthProviders
 */
const AuthProviders = () => {
    return (
        <>
            <div className="w-full mb-5">
                <button className="w-full flex justify-center items-center bg-secondary bg-opacity-50 text-white py-2 mt-5 md:mt-6 text-[1.15rem] rounded-xl" type="button">
                    <BsGithub className="mr-4 text-2xl text-black" /> Regístrate con GitHub
                </button>
                <button className="w-full flex justify-center items-center bg-secondary bg-opacity-50 text-white py-2 mt-5 md:mt-6 text-[1.15rem] rounded-xl" type="button">
                    <FcGoogle className="mr-4 text-2xl" /> Regístrate con Google
                </button>
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
