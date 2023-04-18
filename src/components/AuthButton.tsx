import { signIn } from "next-auth/react"
import { AuthButtonProps } from "@customTypes/components"

/**
 * Este componente se encarga de crear los botones de registro de las diferentes plataformas
 * @param {AuthButtonProps} props
 * @returns component
 * @example <AuthButton />
 */
const AuthButton = ({ children, credential }: AuthButtonProps) => {
    const handleClick = async () => {
        await signIn(credential, { callbackUrl: "/" })
    }

    return (
        <button
            className="w-full flex justify-center items-center bg-secondary bg-opacity-50 text-white py-2 mt-5 md:mt-6 text-[1.15rem] rounded-xl"
            type="button"
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default AuthButton
