import { useState } from "react"
import { useRouter } from "next/router"
import { getUserDataFrom } from "@lib/utils/user"
import { MutableRefObject } from "react"
import { signIn, SignInResponse } from "next-auth/react"
import { REDIRECT } from "@lib/constants/links"

/**
 * @description Hook para loguear a un usuario
 * @param {MutableRefObject<HTMLDivElement>} ref - Referencia al formulario
 * @returns {{login: (function(): Promise<void>)}}
 */
const useLogin = (ref: MutableRefObject<HTMLDivElement>) => {
    const [error, setError] = useState("")
    const router = useRouter()

    /**
     * Esta función se encarga de loguear a un usuario
     * @returns {Promise<void>}
     */
    const login = async () => {
        const user = getUserDataFrom(ref.current)
        const response = await signIn("credentials", { redirect: false, ...user })
        const { ok } = response as SignInResponse

        if (!ok) {
            setError("Credenciales incorrectas")
        } else {
            setError("")
            await router.push(REDIRECT.HOME)
        }
    }
    return { login, error }
}

export default useLogin
