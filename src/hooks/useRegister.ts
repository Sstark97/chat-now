import { useState } from "react"
import { useRouter } from "next/router"
import { getUserDataFrom } from "@lib/utils/user"
import { postFrom } from "@lib/utils/fetcher"
import { MutableRefObject } from "react"
import { API, REDIRECT } from "@lib/constants/links"

/**
 * @description Hook para registrar un usuario
 * @param ref
 * @returns {{register: (function(): Promise<void>)}}
 * @example
 * const { register } = useRegister(ref)
 */
const useRegister = (ref: MutableRefObject<HTMLDivElement>) => {
    const [error, setError] = useState("")
    const router = useRouter()

    const register = async () => {
        const user = getUserDataFrom(ref.current)
        try {
            const userRegistered = await postFrom(user, API.REGISTER)

            if (userRegistered) {
                setError("")
                await router.push(REDIRECT.LOGIN)
            }
        } catch (error: unknown) {
            const { message } = error as Error
            setError(message)
        }
    }
    return { register, error }
}

export default useRegister
