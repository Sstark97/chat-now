import { useState } from "react"
import { useRouter } from "next/router"
import { getUserDataFrom } from "@lib/utils/user"
import { MutableRefObject } from "react"
import { signIn, SignInResponse } from "next-auth/react"

/**
 * @description Hook para loguear a un usuario
 * @param ref
 * @returns {{login: (function(): Promise<void>)}}
 * @example
 * const { login } = useLogin(ref)
 */
const useLogin = (ref: MutableRefObject<HTMLDivElement>) => {
    const [error, setError] = useState("")
    const router = useRouter()
    const login = async () => {
        const user = getUserDataFrom(ref.current)
        const response = await signIn("credentials", { redirect: false, ...user })
        const { ok } = response as SignInResponse

        if (!ok) {
            setError("Credenciales incorrectas")
        } else {
            setError("")
            router.push("/")
        }
    }
    return { login, error }
}

export default useLogin
