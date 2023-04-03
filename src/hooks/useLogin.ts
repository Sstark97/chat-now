import { getUserDataFrom } from "@lib/utils/user"
import { MutableRefObject } from "react"
import { signIn } from "next-auth/react"

/**
 * @description Hook para loguear a un usuario
 * @param ref
 * @returns {{login: (function(): Promise<void>)}}
 * @example
 * const { login } = useLogin(ref)
 */
const useLogin = (ref: MutableRefObject<HTMLDivElement>) => {
    const login = async () => {
        const user = getUserDataFrom(ref.current)
        await signIn("credentials", { redirect: true, callbackUrl: "/", ...user })
    }
    return { login }
}

export default useLogin
